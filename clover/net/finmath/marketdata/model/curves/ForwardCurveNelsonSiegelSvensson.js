var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":173,"id":4139,"methods":[{"el":62,"sc":2,"sl":53},{"el":76,"sc":2,"sl":74},{"el":81,"sc":2,"sl":78},{"el":93,"sc":2,"sl":83},{"el":98,"sc":2,"sl":95},{"el":106,"sc":4,"sl":103},{"el":111,"sc":4,"sl":108},{"el":113,"sc":2,"sl":100},{"el":118,"sc":2,"sl":115},{"el":123,"sc":2,"sl":120},{"el":128,"sc":2,"sl":125},{"el":133,"sc":2,"sl":130},{"el":151,"sc":2,"sl":142},{"el":156,"sc":2,"sl":153},{"el":168,"sc":2,"sl":162},{"el":172,"sc":2,"sl":170}],"name":"ForwardCurveNelsonSiegelSvensson","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":83}],"name":"testMultiPeriodFloater","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_106":{"methods":[{"sl":83}],"name":"testSinglePeriods","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_130":{"methods":[{"sl":83}],"name":"testUnalignedPeriods","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_131":{"methods":[{"sl":83}],"name":"testSinglePeriods","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_143":{"methods":[{"sl":83}],"name":"testSinglePeriods","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_150":{"methods":[{"sl":53},{"sl":78},{"sl":83},{"sl":125},{"sl":162},{"sl":170}],"name":"testVolatilityCalibration","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":61},{"sl":80},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":92},{"sl":127},{"sl":164},{"sl":165},{"sl":166},{"sl":167},{"sl":171}]},"test_164":{"methods":[{"sl":53},{"sl":78},{"sl":83},{"sl":125},{"sl":162},{"sl":170}],"name":"testVolatilityCalibration","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":61},{"sl":80},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":92},{"sl":127},{"sl":164},{"sl":165},{"sl":166},{"sl":167},{"sl":171}]},"test_182":{"methods":[{"sl":83}],"name":"testMultiPeriodFloater","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_183":{"methods":[{"sl":83}],"name":"testSinglePeriods","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_191":{"methods":[{"sl":83}],"name":"testSinglePeriods","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_194":{"methods":[{"sl":83}],"name":"testUnalignedPeriods","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_212":{"methods":[{"sl":83}],"name":"testMultiPeriodFloater","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_265":{"methods":[{"sl":83}],"name":"testMultiPeriodFloater","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_269":{"methods":[{"sl":53},{"sl":78},{"sl":83},{"sl":162},{"sl":170}],"name":"test","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":61},{"sl":80},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":92},{"sl":164},{"sl":165},{"sl":166},{"sl":167},{"sl":171}]},"test_291":{"methods":[{"sl":83}],"name":"testUnalignedPeriods","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_300":{"methods":[{"sl":83}],"name":"testSinglePeriods","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_330":{"methods":[{"sl":83}],"name":"testUnalignedPeriods","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_335":{"methods":[{"sl":83}],"name":"testUnalignedPeriods","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_356":{"methods":[{"sl":83}],"name":"testUnalignedPeriods","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_365":{"methods":[{"sl":83}],"name":"testSinglePeriods","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_386":{"methods":[{"sl":83}],"name":"testSinglePeriods","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_410":{"methods":[{"sl":83}],"name":"testUnalignedPeriods","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_421":{"methods":[{"sl":83}],"name":"testMultiPeriodFloater","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_431":{"methods":[{"sl":83}],"name":"testSinglePeriods","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_433":{"methods":[{"sl":83}],"name":"testUnalignedPeriods","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_441":{"methods":[{"sl":83}],"name":"testMultiPeriodFloater","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_446":{"methods":[{"sl":83}],"name":"testMultiPeriodFloater","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_475":{"methods":[{"sl":83}],"name":"testMultiPeriodFloater","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_489":{"methods":[{"sl":83}],"name":"testUnalignedPeriods","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_536":{"methods":[{"sl":83}],"name":"testSinglePeriods","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_70":{"methods":[{"sl":83}],"name":"testMultiPeriodFloater","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_84":{"methods":[{"sl":83}],"name":"testMultiPeriodFloater","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]},"test_86":{"methods":[{"sl":83}],"name":"testUnalignedPeriods","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":92}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [164, 269, 150], [164, 269, 150], [164, 269, 150], [164, 269, 150], [164, 269, 150], [164, 269, 150], [164, 269, 150], [], [164, 269, 150], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [164, 269, 150], [], [164, 269, 150], [], [], [164, 212, 182, 446, 143, 0, 431, 300, 536, 194, 421, 475, 183, 291, 131, 269, 86, 433, 70, 265, 330, 441, 191, 106, 150, 130, 489, 356, 84, 386, 365, 335, 410], [], [164, 212, 182, 446, 143, 0, 431, 300, 536, 194, 421, 475, 183, 291, 131, 269, 86, 433, 70, 265, 330, 441, 191, 106, 150, 130, 489, 356, 84, 386, 365, 335, 410], [164, 212, 182, 446, 143, 0, 431, 300, 536, 194, 421, 475, 183, 291, 131, 269, 86, 433, 70, 265, 330, 441, 191, 106, 150, 130, 489, 356, 84, 386, 365, 335, 410], [164, 269, 150], [164, 269, 150], [164, 269, 150], [], [], [164, 212, 182, 446, 143, 0, 431, 300, 536, 194, 421, 475, 183, 291, 131, 269, 86, 433, 70, 265, 330, 441, 191, 106, 150, 130, 489, 356, 84, 386, 365, 335, 410], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [164, 150], [], [164, 150], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [164, 269, 150], [], [164, 269, 150], [164, 269, 150], [164, 269, 150], [164, 269, 150], [], [], [164, 269, 150], [164, 269, 150], [], []]