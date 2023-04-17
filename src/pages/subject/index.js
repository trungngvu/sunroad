import Subject from "@/components/Subject";
import Classes from "@/components/Classes";
import PageHeader from "@/components/PageHeader";
import { Data } from "@/context";

import { use, useContext } from "react";
const ClassesPage = () => {
  const { message: subjects } = useContext(Data);
  return (
    <>
      <PageHeader title="Khóa học" />
      <Subject subjects={subjects} />
      <Classes />
    </>
  );
};

export default ClassesPage;
