import React from "react";
import Link from "next/link";

import User from "./../components/User";

const index = () => {
  return (
    <div>
      <h1>The Main Page Hello World</h1>
      <p>
        Go to{" "}
        <Link href="/about">
          <a>About Page</a>
        </Link>
      </p>
      <User />
    </div>
  );
};

export default index;
