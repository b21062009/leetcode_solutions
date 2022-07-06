var isPalindrome = function(x) {
    x = Array.from(String(x), Number)
    for (let i = 0; i < (x.length-1)/2; i++) {
        if (x[i] !== x[(x.length-1)-i]) return false
    }
    return true
};

isPalindrome(121) // true