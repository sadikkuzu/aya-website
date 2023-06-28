// import Link from "next/link";
import { type PeopleGetComposition } from "types/src/people-get-result.ts";

interface ProfileHeadingProps {
  item: PeopleGetComposition;
}

const ProfileHeading = (props: ProfileHeadingProps) => {
  return (
    <>
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        {props.item.profile.title}
      </h1>
      <h2 className="text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
        {props.item.profile.description}
      </h2>
    </>
  );
};

export { ProfileHeading };