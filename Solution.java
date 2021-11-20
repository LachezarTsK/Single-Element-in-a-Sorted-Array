
public class Solution {

    public int singleNonDuplicate(int[] nums) {

        if (nums.length == 1) {
            return nums[0];
        }

        int left = 0;
        int right = nums.length - 1;
        int singleNumber = 0;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (elementHasNoDuplicates(nums, mid)) {
                singleNumber = nums[mid];
                break;
            }

            if (allPreviousElemensAreInCouples(nums, mid)) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return singleNumber;
    }

    public boolean elementHasNoDuplicates(int[] nums, int index) {
        if ((index == 0 && nums[index] != nums[index + 1]) || (index == nums.length - 1 && nums[index] != nums[index - 1])) {
            return true;
        }
        return nums[index] != nums[index - 1] && nums[index] != nums[index + 1];
    }

    public boolean allPreviousElemensAreInCouples(int[] nums, int index) {
        return (index % 2 == 1 && nums[index] == nums[index - 1]) || (index % 2 == 0 && nums[index] == nums[index + 1]);
    }
}
