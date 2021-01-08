import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ href, children, ...rest }) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} active`;
  }

  return (
    <Link href={href} {...rest}>
      {React.cloneElement(children, { className })}
    </Link>
  );
};

export default ActiveLink;
