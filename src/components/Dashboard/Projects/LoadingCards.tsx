"use client";

import { Card } from "antd";
import React from "react";

const { Meta } = Card;

const LoadingCards: React.FC = () => {
  return (
    <>
      <Card style={{ marginTop: 16 }} loading={true}></Card>
      <Card style={{ marginTop: 16 }} loading={true}></Card>
      <Card style={{ marginTop: 16 }} loading={true}></Card>
      <Card style={{ marginTop: 16 }} loading={true}></Card>
      <Card style={{ marginTop: 16 }} loading={true}></Card>
      <Card style={{ marginTop: 16 }} loading={true}></Card>
    </>
  );
};

export default LoadingCards;
