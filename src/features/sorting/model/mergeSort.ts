import type { AlgoFn } from "@/shared/lib/algoEngine/types";
import type { Fruit } from "@/entities/fruit";

export const mergeSort: AlgoFn = async (fruits, controller) => {
  const arr = [...fruits];
  const n = arr.length;

  const merge = async (left: number, mid: number, right: number) => {
    const temp: Fruit[] = [];
    let i = left;
    let j = mid + 1;

    while (i <= mid && j <= right) {
      controller.setActiveIndices([i, j]);
      await controller.wait();

      if (arr[i].price <= arr[j].price) {
        temp.push(arr[i++]);
      } else {
        temp.push(arr[j++]);
      }
    }

    while (i <= mid) temp.push(arr[i++]);
    while (j <= right) temp.push(arr[j++]);

    for (let k = left; k <= right; k++) {
      arr[k] = temp[k - left];

      controller.setActiveIndices([k]);
      controller.updateFruits([...arr]);
      await controller.wait();
    }
  };

  const sort = async (left: number, right: number) => {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);

    await sort(left, mid);
    await sort(mid + 1, right);
    await merge(left, mid, right);
  };

  await sort(0, n - 1);

  controller.setActiveIndices([]);
  controller.setSuccessIndices(arr.map((_, idx) => idx));
};
