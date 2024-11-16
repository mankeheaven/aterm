import styled from "styled-components";
import Icon from "@ant-design/icons";
import {
  DeviceIcon,
  LoginIcon,
  PluginIcon,
  SettingIcon,
} from "./icon";

export type ActivityType = "plugin" | "device" | "login" | "setting";

const AIcon = (type: ActivityType) => {
  switch (type) {
    case "device":
      return DeviceIcon;
    case "plugin":
      return PluginIcon;
    case "login":
      return LoginIcon;
    case "setting":
      return SettingIcon;
  }
};

interface IActivityIconProps {
  type: ActivityType;
  className?: string;
  active?: boolean;
}

const ActivityIcon = ({ type, className, active }: IActivityIconProps) => {
  return (
    <StyledActivityIcon
      component={AIcon(type)}
      className={className}
      style={{
        color: active ? "var(--color-normal)" : "var(--color-lighter)",
      }}
    />
  );
};

const StyledActivityIcon = styled(Icon)`
  font-size: 16px;
  width: 26px;
  height: 26px;
  margin-left: -2px;

  &:hover {
    color: var(--color-normal) !important;
  }
`;

export default ActivityIcon;
