import React from "react";
import Select from "react-select";

const MultiSelect: React.FC<{
  options: { value: string; label: string };
  className: string;
}> = ({
  options,
  className,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) => <Select className={className} options={options as any} />;

export default MultiSelect;
