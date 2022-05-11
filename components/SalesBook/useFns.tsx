import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { getSales } from "../../redux/UserSlice";

const UseFns = (id: number) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false);
  const { user } = useSelector((state: RootState) => state.user);

  const deleteHandler = () => {
    setLoading(true);
    axios
      .delete(`http://192.168.43.96:5000/api/v1/sales/${id}`)
      .then(() => {
        setLoading(false);
        dispatch(getSales({ user: user.email }));
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const cancelHandler = () => {
    setLoading(true);
    axios
      .delete(`http://192.168.43.96:5000/api/v1/sales/reverse/${id}`)
      .then(() => {
        setLoading(false);
        dispatch(getSales({ user: user.email }));
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return { deleteHandler, cancelHandler, loading };
};
export default UseFns;
