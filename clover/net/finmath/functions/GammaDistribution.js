var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":31,"id":1541,"methods":[{"el":20,"sc":2,"sl":17},{"el":30,"sc":2,"sl":28}],"name":"GammaDistribution","sl":13}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_101":{"methods":[{"sl":17},{"sl":28}],"name":"testMartingalePropertyMonteCarlo","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":29}]},"test_436":{"methods":[{"sl":17},{"sl":28}],"name":"test","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":29}]},"test_476":{"methods":[{"sl":17},{"sl":28}],"name":"testCharacteristicFunction","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":29}]},"test_559":{"methods":[{"sl":17},{"sl":28}],"name":"testScaling","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":29}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [476, 101, 559, 436], [476, 101, 559, 436], [476, 101, 559, 436], [], [], [], [], [], [], [], [], [476, 101, 559, 436], [476, 101, 559, 436], [], []]