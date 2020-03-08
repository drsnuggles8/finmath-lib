var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":178,"id":25439,"methods":[{"el":96,"sc":2,"sl":48},{"el":158,"sc":2,"sl":108},{"el":171,"sc":2,"sl":169},{"el":176,"sc":2,"sl":173}],"name":"SwapLeg","sl":32}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_133":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testModelHierarchy","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]},"test_137":{"methods":[{"sl":108},{"sl":173}],"name":"testFloatLeg","pass":true,"statements":[{"sl":109},{"sl":110},{"sl":121},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":136},{"sl":140},{"sl":141},{"sl":142},{"sl":145},{"sl":152},{"sl":154},{"sl":157},{"sl":175}]},"test_171":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testFixLeg","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":84},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]},"test_298":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testCMSSpreadLeg","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]},"test_37":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testFloatLeg","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]},"test_444":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testExpectedPositiveExposure","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":84},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]},"test_447":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testLIBORInArrearsFloatLeg","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]},"test_501":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testCMSFloatLeg","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]},"test_531":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testAgainstSwaption","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":84},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]},"test_539":{"methods":[{"sl":108},{"sl":173}],"name":"testFixLeg","pass":true,"statements":[{"sl":109},{"sl":110},{"sl":121},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":136},{"sl":140},{"sl":141},{"sl":149},{"sl":152},{"sl":154},{"sl":157},{"sl":175}]},"test_66":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testStochasticCurves","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":84},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]},"test_87":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testLIBORInArrearsFloatLeg","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]},"test_98":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testSwap","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":84},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [37, 87, 171, 501, 66, 133, 298, 531, 98, 447, 444], [37, 87, 171, 501, 66, 133, 298, 531, 98, 447, 444], [], [37, 87, 171, 501, 66, 133, 298, 531, 98, 447, 444], [], [], [], [], [], [], [], [], [37, 87, 171, 501, 66, 133, 298, 531, 98, 447, 444], [37, 87, 171, 501, 66, 133, 298, 531, 98, 447, 444], [37, 87, 171, 501, 66, 133, 298, 531, 98, 447, 444], [37, 87, 171, 501, 66, 133, 298, 531, 98, 447, 444], [37, 87, 171, 501, 66, 133, 298, 531, 98, 447, 444], [], [], [], [], [], [], [37, 87, 171, 501, 66, 133, 298, 531, 98, 447, 444], [], [], [], [37, 87, 171, 501, 66, 133, 298, 531, 98, 447, 444], [37, 87, 171, 501, 66, 133, 298, 531, 98, 447, 444], [37, 87, 501, 66, 133, 298, 531, 98, 447, 444], [298], [], [37, 87, 501, 66, 133, 531, 98, 447, 444], [], [], [], [171, 66, 531, 98, 444], [], [], [37, 87, 171, 501, 66, 133, 298, 531, 98, 447, 444], [37, 87, 171, 501, 66, 133, 298, 531, 98, 447, 444], [], [37, 87, 171, 501, 66, 133, 298, 531, 98, 447, 444], [], [], [], [], [37, 87, 171, 501, 66, 133, 298, 531, 98, 447, 444], [], [], [], [], [], [], [], [], [], [], [], [], [137, 539], [137, 539], [137, 539], [], [], [], [], [], [], [], [], [], [], [137, 539], [137, 539], [137, 539], [], [137, 539], [137, 539], [137, 539], [137, 539], [137, 539], [], [], [], [], [], [], [137, 539], [], [], [], [137, 539], [137, 539], [137], [], [], [137], [], [], [], [539], [], [], [137, 539], [], [137, 539], [], [], [137, 539], [], [], [], [], [], [], [], [], [], [], [], [37, 87, 171, 501, 66, 133, 298, 531, 98, 447, 444], [37, 87, 171, 501, 66, 133, 298, 531, 98, 447, 444], [], [], [137, 37, 87, 171, 501, 66, 133, 298, 531, 98, 447, 539, 444], [], [137, 37, 87, 171, 501, 66, 133, 298, 531, 98, 447, 539, 444], [], [], []]