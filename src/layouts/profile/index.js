// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const mapsUrl = "https://maps.google.com/?q=13.621189,79.288753";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";
import { Button, ButtonGroup } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

function Overview() {
  const getCurrentLocation = () => {
    setTimeout(function () {
      window.open(mapsUrl, "_blank", "noopener,noreferrer");
    }, 3000);
  };

  return (
    <DashboardLayout>
      <ToastContainer />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={6} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="profile information"
                description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                info={{
                  fullName: "Uma Shankar",
                  mobile: "(+91) 8106483286",
                  email: "shankar2001@mail.com",
                  location: "Andhra Pradesh, India",
                  Aadhaar: "654659159679",
                }}
                social={[]}
                action={{ route: "", tooltip: "" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>

            <Grid item xs={12} xl={4}>
              <ProfilesList title="Frequent Contacts" profiles={profilesListData} shadow={false} />
            </Grid>

            <Grid item xs={12} md={6} xl={2}>
              <Button
                onClick={() => {
                  // toast("Wow so easy!");
                  axios.get("http://localhost:4000/sendNotif").then((eve) => {
                    toast("Notification Sent Successfully, trying to get location!");
                    getCurrentLocation();
                  });
                }}
              >
                Get Current Location
              </Button>
              {/* 
              <Button
                onClick={() => {
                  // toast("Wow so easy!");
                  axios.get("http://localhost:4000/sendNotif").then((eve) => {
                    toast("Notification Sent Successfully");
                  });
                }}
              >
                GET IP Information
              </Button> */}

              {/* <ProfilesList title="Frequent Contacts" profiles={profilesListData} shadow={false} /> */}
              {/* <Button>Track User</Button> */}
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
