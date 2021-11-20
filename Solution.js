
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    let left = 0;
    let right = nums.length - 1;
    let singleNumber = 0;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

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
};

function elementHasNoDuplicates(nums, index) {
    if ((index === 0 && nums[index] !== nums[index + 1]) || (index === nums.length - 1 && nums[index] !== nums[index - 1])) {
        return true;
    }
    return nums[index] !== nums[index - 1] && nums[index] !== nums[index + 1];
}

function allPreviousElemensAreInCouples(nums, index) {
    return (index % 2 === 1 && nums[index] === nums[index - 1]) || (index % 2 === 0 && nums[index] === nums[index + 1]);
}
