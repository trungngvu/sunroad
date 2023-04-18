import Registration from "@/components/Registration";

import { useEffect } from "react";
import { useRouter } from "next/router";

const RegistrationPage = ({ subjects }) => {
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
