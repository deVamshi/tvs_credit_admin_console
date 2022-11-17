import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        {/* <MDTypography variant="caption">{email}</MDTypography> */}
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {"\u20A8 "}
        {title}
      </MDTypography>
      {/* <MDTypography variant="caption">{description}</MDTypography> */}
    </MDBox>
  );

  return {
    columns: [
      { Header: "Full Name", accessor: "author", width: "45%", align: "left" },
      // { Header: "Loan Amount", accessor: "function", align: "left" },
      { Header: "Phone Number", accessor: "employed", align: "center" },
      { Header: "EMI Status", accessor: "status", align: "center" },
      { Header: "Details", accessor: "action", align: "center" },
    ],

    rows: [
      // {
      //   author: <Author name="Uma Shankar" email="" />,
      //   function: <Job title="802355" description="Organization" />,
      //   status: (
      //     <MDBox ml={-1}>
      //       <MDBadge badgeContent="Paid" color="success" variant="gradient" size="sm" />
      //     </MDBox>
      //   ),
      //   employed: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       8106483285
      //     </MDTypography>
      //   ),
      //   action: <NavLink to="/profile">View</NavLink>,
      // },
      // {
      //   author: <Author name="SivaKaran" email="" />,
      //   function: <Job title="Programator" description="Developer" />,
      //   status: (
      //     <MDBox ml={-1}>
      //       <MDBadge badgeContent="Pending" color="error" variant="gradient" size="sm" />
      //     </MDBox>
      //   ),
      //   employed: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       8106483285
      //     </MDTypography>
      //   ),
      //   action: <NavLink to="/profile">View</NavLink>,
      // },
      {
        author: <Author name="Uma Shankar" email="" />,
        function: <Job title="Executive" description="Projects" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Pending" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8106483285
          </MDTypography>
        ),
        action: (
          <NavLink to="/profile">View</NavLink>

          // <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          //   Show
          // </MDTypography>
        ),
      },
    ],
  };
}
