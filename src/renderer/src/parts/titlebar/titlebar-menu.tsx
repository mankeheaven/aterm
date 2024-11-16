import { Dropdown, MenuProps } from "antd";
import { observer } from "mobx-react";
import styles from "./index.module.css";


const FileMenu = observer(() => {

  const items: MenuProps['items'] = [
    {
      key: 'open config',
      label: (
        <span>open config</span>
      ),
    }]

  return (
    <Dropdown menu={{ items }} trigger={["hover"]}>
      <div>file</div>
    </Dropdown>
  );
});

const HelpMenu = observer(() => {
  const items: MenuProps['items'] = [
    {
      key: 'help',
      label: (
        <span>help</span>
      ),
    }]

  return (
    <Dropdown menu={{ items }} trigger={["hover"]}>
      <div>help</div>
    </Dropdown>
  );
});

const TitlebarMenu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menuItem}>
        <FileMenu />
      </div>
      <div className={styles.menuItem}>
        <HelpMenu />
      </div>
    </div>
  );
};
export default observer(TitlebarMenu);
