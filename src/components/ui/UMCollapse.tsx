// "use client";
import { Collapse } from "antd";
const { Panel } = Collapse;

export type ItemProps = {
  key: string;
  label: string;
  children: React.ReactNode | React.ReactElement;
  isTaken?: boolean;
};

type UMCollapseProps = {
  items: ItemProps[];
  onChange?: (el: string | string[] | "") => void;
  defaultActiveKey?: string | string[];
};

const UMCollapse = ({
  items,
  onChange,
  defaultActiveKey = ["1"],
}: UMCollapseProps) => {
  return (
    <div style={{ margin: "1.5rem" }}>
      <Collapse defaultActiveKey={defaultActiveKey} onChange={onChange}>
        {items?.map((item: any) => {
          return (
            <Panel header={item?.label} key={item?.key}>
              <p>{item?.children}</p>
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
};

export default UMCollapse;
