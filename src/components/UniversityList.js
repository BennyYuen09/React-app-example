import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUniversity } from "../actions/universityAction";
import { List } from "antd";

const UniversityList = () => {
  const dispatch = useDispatch();
  const universityData = useSelector(state => state.university.value);

  useEffect(
    () => {dispatch(loadUniversity())}
  );

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={universityData}
        renderItem={(item) => (
          <List.Item>
            <p>{item.name}</p>
            <p>{item.web_pages?.[0]}</p>
          </List.Item>
        )}
      />
    </>
  );
};

export default UniversityList;
