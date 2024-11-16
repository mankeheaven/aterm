import  classNames from "classnames";
import styles from "./index.module.css";


const Title = () => {
  const toggleWindow = async () => {
    await window.electron.ipcRenderer.invoke("toggleWindow")
  };

  return (
    <div
      className={classNames(styles.title, "draggable", "overflowEllipsis")}
      onDoubleClick={toggleWindow}
    >
      aterm
    </div>
  );
};
export default Title;
