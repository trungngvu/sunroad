import Registration from "@/components/Registration";
import { Data } from "@/context";

import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

const RegistrationPage = () => {
  const { message: subjects } = useContext(Data);
  const router = useRouter();
  const { classId } = router.query;

  useEffect(() => {}, [classId]);

  let classes = [];
  subjects?.map((subject) => (classes = [...classes, ...subject.classes]));

  return (
    <>
      <Registration key={classId} classes={classes} defaultOption={classId} />
    </>
  );
};

export default RegistrationPage;
