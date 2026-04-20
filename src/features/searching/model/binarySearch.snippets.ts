import type { CodeLanguage } from "@/shared/lib/algoEngine/types";

export const binarySearchSnippets: Record<CodeLanguage, string> = {
  python: `def binary_search(arr, target):
    left = 0
    right = len(arr) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
            
    return -1`,

  csharp: `public static int BinarySearch(int[] arr, int target)
{
    int left = 0;
    int right = arr.Length - 1;
    
    while (left <= right)
    {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target)
            return mid;
            
        if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    
    return -1;
}`,
};
