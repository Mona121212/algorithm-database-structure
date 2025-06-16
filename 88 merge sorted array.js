nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

var merge = function(nums1, m, nums2, n){
    let p = m - 1;
    let q = n - 1;
    let j = m + n - 1;

    while(p >= 0 && q >= 0){
        if(nums1[p] > nums2[q]) {
            nums1[j] = nums1[p];
            p--;
        } else {
            nums1[j] = nums2[q];
            q--;
        }
        j--;
    }

    if(nums2[q] >= 0){
        nums1[j] = nums2[q];
        q--;
        j--;
    }
}

var a = merge(nums1, m, nums2, n);
console.log(a)