import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { getSales } from "../../redux/UserSlice";

const UseFns = (id: number) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false);
  const { user, token } = useSelector((state: RootState) => state.user);

  const deleteHandler = () => {
    setLoading(true);
    axios
      .delete(`http://192.168.43.96:5000/api/v1/sales/${id}`, {
        headers: { "Content-Type": "application/json", token },
      })
      .then(() => {
        setLoading(false);
        dispatch(getSales({ user: user.email, token }));
      })
      .catch(() => {
        setLoading(false);
      });
  };
  const cancelHandler = () => {
    setLoading(true);
    axios
      .delete(`http://192.168.43.96:5000/api/v1/sales/reverse/${id}`, {
        headers: { "Content-Type": "application/json", token },
      })
      .then(() => {
        setLoading(false);
        dispatch(getSales({ user: user.email, token }));
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return { deleteHandler, cancelHandler, loading };
};
export default UseFns;
