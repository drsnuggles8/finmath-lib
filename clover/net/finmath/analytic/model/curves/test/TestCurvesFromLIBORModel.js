var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":333,"id":35841,"methods":[{"el":108,"sc":2,"sl":55},{"el":120,"sc":2,"sl":110},{"el":209,"sc":2,"sl":123},{"el":271,"sc":2,"sl":212},{"el":332,"sc":2,"sl":276}],"name":"TestCurvesFromLIBORModel","sl":48}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_66":{"methods":[{"sl":55},{"sl":110},{"sl":123},{"sl":212},{"sl":276}],"name":"testStochasticCurves","pass":true,"statements":[{"sl":61},{"sl":63},{"sl":64},{"sl":66},{"sl":68},{"sl":71},{"sl":76},{"sl":78},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":86},{"sl":87},{"sl":90},{"sl":92},{"sl":93},{"sl":95},{"sl":98},{"sl":100},{"sl":103},{"sl":105},{"sl":107},{"sl":111},{"sl":114},{"sl":115},{"sl":116},{"sl":119},{"sl":130},{"sl":131},{"sl":132},{"sl":134},{"sl":137},{"sl":143},{"sl":155},{"sl":156},{"sl":158},{"sl":163},{"sl":165},{"sl":166},{"sl":167},{"sl":168},{"sl":170},{"sl":175},{"sl":183},{"sl":188},{"sl":191},{"sl":194},{"sl":197},{"sl":202},{"sl":204},{"sl":206},{"sl":208},{"sl":218},{"sl":219},{"sl":220},{"sl":221},{"sl":222},{"sl":225},{"sl":226},{"sl":227},{"sl":228},{"sl":229},{"sl":231},{"sl":234},{"sl":235},{"sl":236},{"sl":237},{"sl":238},{"sl":239},{"sl":241},{"sl":242},{"sl":244},{"sl":253},{"sl":256},{"sl":257},{"sl":258},{"sl":259},{"sl":263},{"sl":264},{"sl":265},{"sl":266},{"sl":269},{"sl":281},{"sl":282},{"sl":283},{"sl":284},{"sl":285},{"sl":288},{"sl":289},{"sl":290},{"sl":291},{"sl":292},{"sl":294},{"sl":297},{"sl":298},{"sl":299},{"sl":300},{"sl":301},{"sl":302},{"sl":306},{"sl":307},{"sl":309},{"sl":320},{"sl":323},{"sl":324},{"sl":326},{"sl":327},{"sl":329},{"sl":331}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [66], [], [], [], [], [], [66], [], [66], [66], [], [66], [], [66], [], [], [66], [], [], [], [], [66], [], [66], [], [66], [66], [66], [66], [], [], [66], [66], [], [], [66], [], [66], [66], [], [66], [], [], [66], [], [66], [], [], [66], [], [66], [], [66], [], [], [66], [66], [], [], [66], [66], [66], [], [], [66], [], [], [], [66], [], [], [], [], [], [], [66], [66], [66], [], [66], [], [], [66], [], [], [], [], [], [66], [], [], [], [], [], [], [], [], [], [], [], [66], [66], [], [66], [], [], [], [], [66], [], [66], [66], [66], [66], [], [66], [], [], [], [], [66], [], [], [], [], [], [], [], [66], [], [], [], [], [66], [], [], [66], [], [], [66], [], [], [66], [], [], [], [], [66], [], [66], [], [66], [], [66], [], [], [], [66], [], [], [], [], [], [66], [66], [66], [66], [66], [], [], [66], [66], [66], [66], [66], [], [66], [], [], [66], [66], [66], [66], [66], [66], [], [66], [66], [], [66], [], [], [], [], [], [], [], [], [66], [], [], [66], [66], [66], [66], [], [], [], [66], [66], [66], [66], [], [], [66], [], [], [], [], [], [], [66], [], [], [], [], [66], [66], [66], [66], [66], [], [], [66], [66], [66], [66], [66], [], [66], [], [], [66], [66], [66], [66], [66], [66], [], [], [], [66], [66], [], [66], [], [], [], [], [], [], [], [], [], [], [66], [], [], [66], [66], [], [66], [66], [], [66], [], [66], [], []]