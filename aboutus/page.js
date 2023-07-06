//our-domain.com/aboutus

import Link from "next/link";
import { Fragment } from "react";

function AboutUsPage() {
  return (
    <Fragment>
      <h1>The About us Page</h1>
      <ul>
        <li>
          <Link href='/aboutus/1'>yash</Link>
        </li>
        <li>
          <Link href='/aboutus/2'>vaibhav</Link>
        </li>
        <li>
          <Link  href='/aboutus/3'>suresh</Link>
        </li>
      </ul>
    </Fragment>
  );
}
export default AboutUsPage;
