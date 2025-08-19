import { Divider, InputNumber } from "antd";

interface IProps {
  unit: string;
  max: number;
}
const DoubleInput = ({ unit, max }: IProps) => {
  return (
    <div>
      <Divider />
      <div className="flex gap-x-10px items-center [&_.ant-input-number]:w-120px">
        <InputNumber min={1} max={max} keyboard defaultValue={0} />
        <span>-</span>
        <InputNumber min={1} max={max} keyboard defaultValue={0} />
        <span>({unit})</span>
      </div>
    </div>
  );
};

export default DoubleInput;
