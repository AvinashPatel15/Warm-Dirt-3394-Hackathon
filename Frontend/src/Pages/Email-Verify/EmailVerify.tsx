import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import success from "../../assets/images/success.png";
import styles from "./EmailVerify.module.css";
import { Box } from "@chakra-ui/react";
import Error from "../Error-Page/Error";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(true);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `${process.env.REACT_APP_BACKEND_URL}/users/${param.id}/verify/${param.token}`;
        let data = await axios.get(url);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <Box>
      {validUrl ? (
        <div className={styles.container}>
          <img src={success} alt="success_img" className={styles.success_img} />
          <h1>Email verified successfully</h1>
          <Link to="/login">
            <button className={styles.green_btn}>Login</button>
          </Link>
        </div>
      ) : (
        <Error />
      )}
    </Box>
  );
};

export default EmailVerify;
