import type { CodeLanguage } from "@/shared/lib/algoEngine/types";

export const mergeSortSnippets: Record<CodeLanguage, string> = {
  python: `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        merge_sort(L)
        merge_sort(R)

        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1`,

  csharp: `public static void MergeSort(int[] arr, int left, int right)
{
    if (left < right)
    {
        int mid = left + (right - left) / 2;

        MergeSort(arr, left, mid);
        MergeSort(arr, mid + 1, right);

        Merge(arr, left, mid, right);
    }
}

private static void Merge(int[] arr, int left, int mid, int right)
{
    int n1 = mid - left + 1;
    int n2 = right - mid;

    int[] L = new int[n1];
    int[] R = new int[n2];

    for (int i = 0; i < n1; ++i) L[i] = arr[left + i];
    for (int j = 0; j < n2; ++j) R[j] = arr[mid + 1 + j];

    int k = left, iIdx = 0, jIdx = 0;
    while (iIdx < n1 && jIdx < n2)
    {
        if (L[iIdx] <= R[jIdx])
        {
            arr[k] = L[iIdx];
            iIdx++;
        }
        else
        {
            arr[k] = R[jIdx];
            jIdx++;
        }
        k++;
    }

    while (iIdx < n1) arr[k++] = L[iIdx++];
    while (jIdx < n2) arr[k++] = R[jIdx++];
}`,
};
