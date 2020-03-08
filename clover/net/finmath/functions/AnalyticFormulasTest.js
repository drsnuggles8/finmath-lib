var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":332,"id":36226,"methods":[{"el":53,"sc":2,"sl":28},{"el":84,"sc":2,"sl":55},{"el":122,"sc":5,"sl":116},{"el":134,"sc":2,"sl":86},{"el":185,"sc":2,"sl":136},{"el":242,"sc":2,"sl":187},{"el":256,"sc":2,"sl":244},{"el":270,"sc":2,"sl":258},{"el":330,"sc":2,"sl":282}],"name":"AnalyticFormulasTest","sl":23}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_204":{"methods":[{"sl":136}],"name":"testSABRSkewApproximation","pass":true,"statements":[{"sl":138},{"sl":139},{"sl":140},{"sl":141},{"sl":143},{"sl":144},{"sl":145},{"sl":146},{"sl":147},{"sl":148},{"sl":149},{"sl":150},{"sl":152},{"sl":153},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":162},{"sl":163},{"sl":164},{"sl":165},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":180},{"sl":181},{"sl":183}]},"test_311":{"methods":[{"sl":28}],"name":"testBachelierOptionImpliedVolatility","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":36},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":43},{"sl":44},{"sl":46},{"sl":49}]},"test_322":{"methods":[{"sl":244}],"name":"testBlackScholesPutCallParityATM","pass":true,"statements":[{"sl":246},{"sl":247},{"sl":248},{"sl":249},{"sl":250},{"sl":252},{"sl":253},{"sl":255}]},"test_490":{"methods":[{"sl":282}],"name":"testBachelierRiskNeutralProbabilities","pass":true,"statements":[{"sl":284},{"sl":285},{"sl":286},{"sl":288},{"sl":289},{"sl":290},{"sl":291},{"sl":294},{"sl":296},{"sl":301},{"sl":303},{"sl":304},{"sl":306},{"sl":307},{"sl":308},{"sl":310},{"sl":311},{"sl":312},{"sl":314},{"sl":321},{"sl":322},{"sl":324},{"sl":325},{"sl":326}]},"test_504":{"methods":[{"sl":86},{"sl":116}],"name":"testSABRCalibration","pass":true,"statements":[{"sl":92},{"sl":93},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":118},{"sl":119},{"sl":120},{"sl":124},{"sl":126},{"sl":128},{"sl":130}]},"test_527":{"methods":[{"sl":187}],"name":"testSABRCurvatureApproximation","pass":true,"statements":[{"sl":190},{"sl":191},{"sl":192},{"sl":193},{"sl":195},{"sl":196},{"sl":197},{"sl":198},{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":204},{"sl":205},{"sl":206},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":212},{"sl":214},{"sl":215},{"sl":216},{"sl":217},{"sl":218},{"sl":219},{"sl":220},{"sl":221},{"sl":223},{"sl":226},{"sl":231},{"sl":232},{"sl":233},{"sl":234},{"sl":235},{"sl":237},{"sl":238},{"sl":240}]},"test_543":{"methods":[{"sl":258}],"name":"testBlackScholesNegativeForward","pass":true,"statements":[{"sl":260},{"sl":261},{"sl":262},{"sl":263},{"sl":264},{"sl":266},{"sl":267},{"sl":269}]},"test_545":{"methods":[{"sl":55}],"name":"testBachelierOptionDelta","pass":true,"statements":[{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":63},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":70},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77},{"sl":80}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [311], [], [311], [311], [311], [311], [311], [], [311], [], [311], [311], [311], [311], [], [311], [311], [], [311], [], [], [311], [], [], [], [], [], [545], [], [545], [545], [545], [545], [545], [], [545], [], [545], [545], [545], [545], [], [545], [], [545], [545], [545], [545], [], [545], [], [], [545], [], [], [], [], [], [504], [], [], [], [], [], [504], [504], [], [504], [504], [], [504], [504], [504], [504], [504], [], [], [504], [504], [504], [504], [], [504], [504], [504], [504], [], [], [504], [], [504], [504], [504], [], [], [], [504], [], [504], [], [504], [], [504], [], [], [], [], [], [204], [], [204], [204], [204], [204], [], [204], [204], [204], [204], [204], [204], [204], [204], [], [204], [204], [204], [204], [204], [204], [204], [204], [204], [], [204], [204], [204], [204], [204], [204], [204], [204], [], [204], [], [204], [], [204], [204], [204], [204], [], [204], [204], [], [204], [], [], [], [527], [], [], [527], [527], [527], [527], [], [527], [527], [527], [527], [527], [527], [527], [527], [], [527], [527], [527], [527], [527], [527], [527], [527], [527], [], [527], [527], [527], [527], [527], [527], [527], [527], [], [527], [], [], [527], [], [], [], [], [527], [527], [527], [527], [527], [], [527], [527], [], [527], [], [], [], [322], [], [322], [322], [322], [322], [322], [], [322], [322], [], [322], [], [], [543], [], [543], [543], [543], [543], [543], [], [543], [543], [], [543], [], [], [], [], [], [], [], [], [], [], [], [], [490], [], [490], [490], [490], [], [490], [490], [490], [490], [], [], [490], [], [490], [], [], [], [], [490], [], [490], [490], [], [490], [490], [490], [], [490], [490], [490], [], [490], [], [], [], [], [], [], [490], [490], [], [490], [490], [490], [], [], [], [], [], []]