var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        for (let x = i+1; x < nums.length; x++){
            if (nums[i] + nums[x] === target){
                return [i, x]
            }
        }
    }
};

twoSum([2,7,11,15], 9) // [0,1]