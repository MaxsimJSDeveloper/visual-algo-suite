import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import {
  type UseFormRegister,
  type FieldErrors,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { type ReactNode, useId } from "react";

interface BaseAlgoForm extends FieldValues {
  delay: number;
}

interface AlgoControlsProps<TFormValues extends BaseAlgoForm> {
  isRunning: boolean;
  onRegenerate: () => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  submitText: string;
  register: UseFormRegister<TFormValues>;
  errors: FieldErrors<TFormValues>;
  children?: ReactNode;
}

export const AlgoControls = <TFormValues extends BaseAlgoForm>({
  isRunning,
  onRegenerate,
  onSubmit,
  submitText,
  register,
  errors,
  children,
}: AlgoControlsProps<TFormValues>) => {
  const formId = useId();

  return (
    <div className="control-panel mt-6 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
      <form
        id={formId}
        onSubmit={onSubmit}
        className="flex flex-wrap items-end gap-4"
      >
        {children}

        <Input
          label="Delay (ms)"
          type="number"
          placeholder="e.g. 300"
          {...register("delay" as Path<TFormValues>, {
            required: "Delay is required",
            min: { value: 0, message: "Cannot be negative" },
            max: { value: 2000, message: "Max 2000ms" },
          })}
          error={errors.delay?.message as string}
        />
      </form>

      <div className="flex gap-4 mt-4">
        <Button
          type="submit"
          form={formId}
          disabled={isRunning}
          variant="success"
        >
          {isRunning ? "Running..." : submitText}
        </Button>
        <Button onClick={onRegenerate} disabled={isRunning} variant="outline">
          Regenerate Array
        </Button>
      </div>
    </div>
  );
};
