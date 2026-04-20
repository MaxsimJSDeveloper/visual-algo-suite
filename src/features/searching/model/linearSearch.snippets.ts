import type { CodeLanguage } from "@/shared/lib/algoEngine/types";

export const linearSearchSnippets: Record<CodeLanguage, string> = {
  python: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
            
    return -1`,

  csharp: `public static int LinearSearch(int[] arr, int target)
{
    for (int i = 0; i < arr.Length; i++)
    {
        if (arr[i] == target)
        {
            return i;
        }
    }
    
    return -1;
}`,
};
