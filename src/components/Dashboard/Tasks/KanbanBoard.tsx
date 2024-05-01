"use client";

import React, {
  Dispatch,
  SetStateAction,
  useState,
  DragEvent,
  FormEvent,
} from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";
import { ProjectType, TaskType } from "@/types/types";
import { DatePicker } from "antd";

import type { DatePickerProps } from "antd";
import { toast } from "sonner";

interface ITaskProps {
  projectData: ProjectType;
}

export const KanbanBoard: React.FC<ITaskProps> = ({ projectData }) => {
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
      <Board projectData={projectData} />
    </div>
  );
};

const Board: React.FC<ITaskProps> = ({ projectData }) => {
  const tasksData = projectData?.tasks;

  const [cards, setCards] = useState(tasksData);

  return (
    <div className="h-full w-full px-5 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-scroll">
      <Column
        title="TODO"
        status="incomplete"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In progress"
        status="in progress"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        status="done"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
      <BurnBarrel setCards={setCards} />
    </div>
  );
};

type ColumnProps = {
  title: string;
  headingColor: string;
  cards: TaskType[];
  status: ColumnType;
  setCards: Dispatch<SetStateAction<TaskType[]>>;
};

const Column = ({
  title,
  headingColor,
  cards,
  status,
  setCards,
}: ColumnProps) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e: DragEvent, card: TaskType) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e: DragEvent) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, status };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els?: HTMLElement[]) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e: DragEvent) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e: DragEvent, indicators: HTMLElement[]) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(
      document.querySelectorAll(
        `[data-column="${status}"]`
      ) as unknown as HTMLElement[]
    );
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.status === status);

  return (
    <div className="w-full px-2 md:px-1 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((c) => {
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
        })}
        <DropIndicator beforeId={null} column={status} />
        <AddCard column={status} setCards={setCards} />
      </div>
    </div>
  );
};

type CardProps = TaskType & {
  handleDragStart: Function;
};

const Card = ({
  taskName,
  id,
  status,
  description,
  deadline,
  handleDragStart,
}: CardProps) => {
  return (
    <>
      <DropIndicator beforeId={id} column={status} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) =>
          handleDragStart(e, { taskName, id, status, description, deadline })
        }
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <h1 className="pb-1 text-base font-semibold text-neutral-100">
          Task: {taskName}
        </h1>
        <p className="text-sm text-neutral-100">{description}</p>
        <p className="text-sm text-neutral-100">Due: {deadline}</p>
      </motion.div>
    </>
  );
};

type DropIndicatorProps = {
  beforeId: string | null;
  column: string;
};

const DropIndicator = ({ beforeId, column }: DropIndicatorProps) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};

const BurnBarrel = ({
  setCards,
}: {
  setCards: Dispatch<SetStateAction<TaskType[]>>;
}) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e: DragEvent) => {
    const cardId = e.dataTransfer.getData("cardId");

    setCards((pv) => pv.filter((c) => c.id !== cardId));

    setActive(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mx-3 mt-9 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
      }`}
    >
      {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
    </div>
  );
};

type AddCardProps = {
  column: ColumnType;
  setCards: Dispatch<SetStateAction<TaskType[]>>;
};

const AddCard = ({ column, setCards }: AddCardProps) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const [selectedDate, setSelectedDate] = useState("");

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    // @ts-ignore
    setSelectedDate(dateString);
  };

  console.log(selectedDate);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const taskName = form.taskName.value;
    const description = form.description.value;
    const status = column;
    const deadline = selectedDate;
    const assignedMembers = [form.assignedMembers.value];

    const taskData: TaskType = {
      taskName,
      description,
      status,
      deadline,
      assignedMembers,
      id: Math.random().toString(),
    };

    console.log(taskData, column);
    setCards((pv) => [...pv, taskData]);
    toast.success("Task added successfully");

    setAdding(false);
  };
  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <input
            id="taskName"
            name="taskName"
            autoFocus
            placeholder="Enter task name"
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
          />
          <input
            id="description"
            name="description"
            autoFocus
            placeholder="Enter task description"
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
          />
          <select
            id="assignedMembers"
            name="assignedMembers"
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-violet-300  placeholder-violet-300 focus:outline-0"
          >
            <option className="text-violet-300 bg-[#332E44]" value="" disabled>
              Add a member
            </option>
            <option
              className="text-violet-300 bg-[#332E44]"
              value="Alice Johnson"
            >
              Alice Johnson
            </option>
            <option className="text-violet-300 bg-[#332E44]" value="Bob Brown">
              Bob Brown
            </option>
            <option
              className="text-violet-300 bg-[#332E44]"
              value="Sai Krishna"
            >
              Sai Krishna
            </option>
          </select>
          <DatePicker
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-white  placeholder-white hover:bg-violet-400/20 hover:outline-0 focus:outline-0"
            onChange={onChange}
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>Add card</span>
          <FiPlus />
        </motion.button>
      )}
    </>
  );
};

type ColumnType = "incomplete" | "in progress" | "done";
