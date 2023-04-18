import Registration from "@/components/Registration";
import { useRouter } from "next/router";
import { classesApi } from "../api/class";

export const getStaticProps = async () => {
  const classes = await classesApi();
  return { props: { classes }, revalidate: 10 };
};

const RegistrationPage = ({ classes }) => {
  const router = useRouter();
  const { classId } = router.query;

  return (
    <>
      <Registration key={classId} classes={classes} defaultOption={classId} />
    </>
  );
};

export default RegistrationPage;
