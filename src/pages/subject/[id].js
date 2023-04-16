import Classes from "@/components/Classes";
import prisma from "@/lib/prisma";

export const getServerSideProps = async ({ params }) => {
  const classes = await prisma.class.findMany({
    where: {
      id: params?.id,
    },
  });
  return {
    props: { classes },
  };
};
const Class = ({ classes }) => {
  return <Classes classes={classes} />;
};

export default Class;
