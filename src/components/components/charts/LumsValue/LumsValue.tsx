import React, { useEffect, useState } from 'react';
import { Card } from 'frontend-elements';
// import { RootState } from 'redux/store';
// import { useSelector } from 'react-redux';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import numeral from 'numeral';
import { useDarkMode } from 'hooks';

const LumsValue = (): JSX.Element => {
    const data = [
        { time: 1655712000, close: 0.0010050023, high: 0.0010052043, low: 0.0009817015, open: 0.0009817015, volume: 328.5328170978 },
        { time: 1655715600, close: 0.0010121286, high: 0.0010144312, low: 0.001001944, open: 0.001004998, volume: 1116.6380263739 },
        { time: 1655719200, close: 0.0010271043, high: 0.001027588, low: 0.0010118845, open: 0.0010121286, volume: 126.0147350029 },
        { time: 1655722800, close: 0.0010290183, high: 0.0010337912, low: 0.00102353, open: 0.0010278492, volume: 2.5459936004 },
        { time: 1655726400, close: 0.0010140344, high: 0.0010290183, low: 0.001012132, open: 0.0010290183, volume: 353.7423226483 },
        { time: 1655730000, close: 0.0010116474, high: 0.001024996, low: 0.001011536, open: 0.0010140344, volume: 1125.9615300811 },
        { time: 1655733600, close: 0.0010264903, high: 0.0010265233, low: 0.0010116444, open: 0.0010116474, volume: 56.3626037171 },
        { time: 1655737200, close: 0.0010163094, high: 0.0010300872, low: 0.0010115438, open: 0.0010264371, volume: null },
        { time: 1655740800, close: 0.0010070319, high: 0.0010179302, low: 0.0009893064, open: 0.0010163164, volume: 276.8397003465 },
        { time: 1655744400, close: 0.0009995583, high: 0.0010104081, low: 0.0009995583, open: 0.0010070319, volume: 843.5693442054 },
        { time: 1655748000, close: 0.0009954072, high: 0.0009995587, low: 0.0009940732, open: 0.0009995587, volume: 95.358900624 },
        { time: 1655751600, close: 0.000996789, high: 0.0009987038, low: 0.0009919019, open: 0.0009954072, volume: 3.5338291224 },
        { time: 1655755200, close: 0.0010045627, high: 0.0010045948, low: 0.0009966103, open: 0.000996789, volume: 281.2826956882 },
        { time: 1655758800, close: 0.0009951623, high: 0.001006046, low: 0.0009949697, open: 0.0010045627, volume: 462.3927050701 },
        { time: 1655762400, close: 0.0009911202, high: 0.0009953358, low: 0.0009875293, open: 0.0009951623, volume: 90.7301807657 },
        { time: 1655766000, close: 0.0009951811, high: 0.0009965878, low: 0.0009830506, open: 0.0009911202, volume: null },
        { time: 1655769600, close: 0.0009902019, high: 0.0010002458, low: 0.0009739226, open: 0.0009951811, volume: 453.9019518822 },
        { time: 1655773200, close: 0.0009899771, high: 0.0009953426, low: 0.0009867474, open: 0.0009902028, volume: 624.464857633 },
        { time: 1655776800, close: 0.0009854158, high: 0.0009908527, low: 0.000983444, open: 0.0009899771, volume: 23.866839481 },
        { time: 1655780400, close: 0.0009930893, high: 0.0009930893, low: 0.0009853719, open: 0.0009854158, volume: 3.7342058372 },
        { time: 1655784000, close: 0.0009980229, high: 0.0009982526, low: 0.0009917458, open: 0.0009930893, volume: 503.383599553 },
        { time: 1655787600, close: 0.0010162433, high: 0.0010168085, low: 0.0009980184, open: 0.0009980229, volume: 856.1340240084 },
        { time: 1655791200, close: 0.001017623, high: 0.0010237539, low: 0.0010156331, open: 0.0010162433, volume: 26.5500246186 },
        { time: 1655794800, close: 0.001010823, high: 0.0010193967, low: 0.0010104054, open: 0.0010177605, volume: 82.8551264851 },
        { time: 1655798400, close: 0.0010258801, high: 0.0010259031, low: 0.0010108211, open: 0.001010823, volume: 344.6664922556 },
        { time: 1655802000, close: 0.0010160998, high: 0.0010258801, low: 0.0010160998, open: 0.0010258801, volume: 961.2659539286 },
        { time: 1655805600, close: 0.0010162108, high: 0.0010163635, low: 0.0010059054, open: 0.001015913, volume: 119.4848256491 },
        { time: 1655809200, close: 0.0010084042, high: 0.0010215454, low: 0.0010083765, open: 0.0010162108, volume: 9.3322674225 },
        { time: 1655812800, close: 0.0010104077, high: 0.0010109404, low: 0.0010068548, open: 0.0010084042, volume: 73.5184154161 },
        { time: 1655816400, close: 0.0010319502, high: 0.0010320212, low: 0.0010078826, open: 0.0010104077, volume: 1131.645712182 },
        { time: 1655820000, close: 0.0010358837, high: 0.0010367393, low: 0.0010287406, open: 0.001031981, volume: 360.9838346075 },
        { time: 1655823600, close: 0.0010264671, high: 0.0010358541, low: 0.0010263496, open: 0.0010358541, volume: 92.5471454395 },
        { time: 1655827200, close: 0.0010304464, high: 0.0010310506, low: 0.0010258771, open: 0.0010264671, volume: 94.5762043931 },
        { time: 1655830800, close: 0.0010252065, high: 0.0010334839, low: 0.0010228144, open: 0.0010304464, volume: 909.0824138476 },
        { time: 1655834400, close: 0.0010140433, high: 0.0010252065, low: 0.0010087419, open: 0.0010252065, volume: 380.5934243123 },
        { time: 1655838000, close: 0.0010023122, high: 0.0010164701, low: 0.0010023076, open: 0.0010140433, volume: null },
        { time: 1655841600, close: 0.0009996432, high: 0.0010031986, low: 0.0009956655, open: 0.0010023122, volume: 7.0719553496 },
        { time: 1655845200, close: 0.0010028338, high: 0.0010028342, low: 0.0009996338, open: 0.0009996432, volume: 796.7052232842 },
        { time: 1655848800, close: 0.0010066885, high: 0.0010068703, low: 0.0009987891, open: 0.0010028338, volume: 609.451254158 },
        { time: 1655852400, close: 0.001006815, high: 0.0010129895, low: 0.0010025212, open: 0.0010066885, volume: 8.2859235457 },
        { time: 1655856000, close: 0.0010000495, high: 0.0010068028, low: 0.0009934961, open: 0.0010068028, volume: 50.6522201135 },
        { time: 1655859600, close: 0.000989736, high: 0.0010027907, low: 0.0009896067, open: 0.0010000455, volume: 1011.9059457129 },
        { time: 1655863200, close: 0.0009850871, high: 0.0009897414, low: 0.0009832176, open: 0.000989736, volume: 276.6633986162 },
        { time: 1655866800, close: 0.0009823838, high: 0.0009888732, low: 0.000982383, open: 0.0009850871, volume: 15.9552645228 },
        { time: 1655870400, close: 0.0009875172, high: 0.000987854, low: 0.0009823838, open: 0.0009823838, volume: 25.5028133812 },
        { time: 1655874000, close: 0.000991487, high: 0.0009943736, low: 0.0009856854, open: 0.0009875172, volume: 708.0576562516 },
        { time: 1655877600, close: 0.0009786893, high: 0.000991487, low: 0.0009746558, open: 0.000991487, volume: 637.4926213767 },
        { time: 1655881200, close: 0.0009753454, high: 0.0009812526, low: 0.000975321, open: 0.0009786893, volume: 1.2419145181 },
        { time: 1655884800, close: 0.0009772653, high: 0.0009773023, low: 0.000972627, open: 0.0009753454, volume: 30.7282633078 },
        { time: 1655888400, close: 0.0009910218, high: 0.0009926877, low: 0.0009771399, open: 0.0009772653, volume: 938.5768657186 },
        { time: 1655892000, close: 0.0009918671, high: 0.0009949831, low: 0.000989285, open: 0.0009910218, volume: 346.5595043546 },
        { time: 1655895600, close: 0.0010010884, high: 0.001001883, low: 0.0009917998, open: 0.0009918671, volume: 2.2298949995 },
        { time: 1655899200, close: 0.0009947702, high: 0.0010035684, low: 0.000991079, open: 0.0010010884, volume: 84.4081402322 },
        { time: 1655902800, close: 0.0010117704, high: 0.0010120759, low: 0.0009924811, open: 0.0009947702, volume: 969.7881534487 },
        { time: 1655906400, close: 0.0010134655, high: 0.0010173248, low: 0.0010117586, open: 0.0010117586, volume: 303.353094345 },
        { time: 1655910000, close: 0.0009980591, high: 0.0010137396, low: 0.0009980591, open: 0.0010137396, volume: 0.7031199476 },
        { time: 1655913600, close: 0.0009937834, high: 0.0009980535, low: 0.0009867305, open: 0.0009980535, volume: 494.2261257922 },
        { time: 1655917200, close: 0.0010372474, high: 0.0010427998, low: 0.0009937798, open: 0.0009937828, volume: 648.1618166608 },
        { time: 1655920800, close: 0.001042253, high: 0.0010603342, low: 0.0010318194, open: 0.0010372474, volume: 81.2774523727 },
        { time: 1655924400, close: 0.0010382299, high: 0.0010487822, low: 0.001030939, open: 0.001042253, volume: 2.8379031355 },
        { time: 1655928000, close: 0.0010265055, high: 0.0010382878, low: 0.0010224646, open: 0.0010382299, volume: 135.7792413671 },
        { time: 1655931600, close: 0.0010188299, high: 0.001028073, low: 0.001014069, open: 0.0010263269, volume: 960.7151731572 },
        { time: 1655935200, close: 0.0010034809, high: 0.0010198935, low: 0.0009989639, open: 0.0010188299, volume: 791.5650107088 },
        { time: 1655938800, close: 0.0010010299, high: 0.0010072996, low: 0.0010007642, open: 0.0010034809, volume: 6.0103067256 },
        { time: 1655942400, close: 0.001018065, high: 0.0010180937, low: 0.0010010214, open: 0.0010010299, volume: 18.0002318032 },
        { time: 1655946000, close: 0.0010262707, high: 0.0010360831, low: 0.001018065, open: 0.001018065, volume: 565.8994344365 },
        { time: 1655949600, close: 0.0010267863, high: 0.0010282433, low: 0.0010236604, open: 0.0010261724, volume: 603.2461525268 },
        { time: 1655953200, close: 0.0010372619, high: 0.0010394072, low: 0.0010258508, open: 0.001026786, volume: 3.6833986158 },
        { time: 1655956800, close: 0.0010430892, high: 0.0010436151, low: 0.001036128, open: 0.0010372619, volume: 11.4011839859 },
        { time: 1655960400, close: 0.0010456091, high: 0.0010473897, low: 0.0010420801, open: 0.0010430875, volume: 921.2756212539 },
        { time: 1655964000, close: 0.0010519418, high: 0.0010571524, low: 0.001041547, open: 0.0010456091, volume: 570.5969944199 },
        { time: 1655967600, close: 0.0010578575, high: 0.0010664568, low: 0.0010519018, open: 0.0010519418, volume: 14.806462932 },
        { time: 1655971200, close: 0.001061932, high: 0.0010672492, low: 0.0010553478, open: 0.0010578575, volume: 43.542199019 },
        { time: 1655974800, close: 0.0010607287, high: 0.0010658165, low: 0.0010584015, open: 0.001061932, volume: 899.6923546742 },
        { time: 1655978400, close: 0.001069421, high: 0.0010697552, low: 0.0010607287, open: 0.0010607287, volume: 314.5954475591 },
        { time: 1655982000, close: 0.0010683526, high: 0.0010719454, low: 0.0010680552, open: 0.001069421, volume: null },
        { time: 1655985600, close: 0.0010674814, high: 0.0010707396, low: 0.0010672684, open: 0.0010683526, volume: 355.2128956733 },
        { time: 1655989200, close: 0.0010603347, high: 0.0010703431, low: 0.0010603333, open: 0.0010674814, volume: 858.8677954185 },
        { time: 1655992800, close: 0.0010883174, high: 0.0010885741, low: 0.0010603262, open: 0.0010603347, volume: 48.2055407513 },
        { time: 1655996400, close: 0.0010902706, high: 0.0010979655, low: 0.0010854987, open: 0.0010883174, volume: 5.0619499403 },
        { time: 1656000000, close: 0.0010905156, high: 0.0010918959, low: 0.0010872272, open: 0.0010902706, volume: 230.4539234113 },
        { time: 1656003600, close: 0.0010984202, high: 0.0010991541, low: 0.0010800752, open: 0.0010905156, volume: 880.4780439436 },
        { time: 1656007200, close: 0.0010952431, high: 0.0011055413, low: 0.0010940402, open: 0.0010984202, volume: 176.8956474304 },
        { time: 1656010800, close: 0.0011198956, high: 0.0011199536, low: 0.0010947936, open: 0.0010952431, volume: 13.4252208889 },
        { time: 1656014400, close: 0.0011319544, high: 0.0011358606, low: 0.0011141105, open: 0.0011198956, volume: 190.9834096394 },
        { time: 1656018000, close: 0.0011228322, high: 0.0011341386, low: 0.0011224346, open: 0.001131949, volume: 1062.6991270472 },
        { time: 1656021600, close: 0.0011247066, high: 0.0011324561, low: 0.001122832, open: 0.0011228322, volume: 315.8279310723 },
        { time: 1656025200, close: 0.0011342704, high: 0.0011345146, low: 0.0011225573, open: 0.0011247066, volume: 4.4618056827 },
        { time: 1656028800, close: 0.0011549025, high: 0.0011677864, low: 0.0011342579, open: 0.0011342704, volume: 0.0588365126 },
        { time: 1656032400, close: 0.0011597355, high: 0.0011710316, low: 0.0011513642, open: 0.001154895, volume: 888.5715413867 },
        { time: 1656036000, close: 0.0011656508, high: 0.0011708228, low: 0.0011551378, open: 0.0011597343, volume: 783.7265863011 },
        { time: 1656039600, close: 0.0011578943, high: 0.0011657926, low: 0.0011575474, open: 0.0011656508, volume: 8.8564813046 },
        { time: 1656043200, close: 0.0011442152, high: 0.001158733, low: 0.001142883, open: 0.0011578943, volume: 39.3172622752 },
        { time: 1656046800, close: 0.0011350278, high: 0.0011442267, low: 0.001134913, open: 0.0011442267, volume: 665.9543207985 },
        { time: 1656050400, close: 0.0011308056, high: 0.0011350289, low: 0.0011302115, open: 0.0011350278, volume: 1019.1125892448 },
        { time: 1656054000, close: 0.0011391921, high: 0.0011396454, low: 0.0011294385, open: 0.0011308056, volume: 115.5701808775 },
        { time: 1656057600, close: 0.0011478921, high: 0.0011501378, low: 0.0011390524, open: 0.0011391921, volume: 25.5711969402 },
        { time: 1656061200, close: 0.0011362862, high: 0.0011482677, low: 0.0011362335, open: 0.0011478921, volume: 109.2221941629 },
        { time: 1656064800, close: 0.001133381, high: 0.0011362862, low: 0.0011295705, open: 0.0011362862, volume: 1286.113237802 },
        { time: 1656068400, close: 0.0011346235, high: 0.0011412587, low: 0.0011331066, open: 0.0011333831, volume: 405.7916623814 },
        { time: 1656072000, close: 0.0011343829, high: 0.0011453732, low: 0.0011258687, open: 0.0011346235, volume: 0.5547840294 },
        { time: 1656075600, close: 0.0011508637, high: 0.0011553895, low: 0.0011323246, open: 0.0011343829, volume: 43.3858636764 },
        { time: 1656079200, close: 0.001146118, high: 0.0011570921, low: 0.0011457235, open: 0.0011508636, volume: 880.5141755108 },
        { time: 1656082800, close: 0.0011390255, high: 0.0011469957, low: 0.001130922, open: 0.0011461186, volume: 1003.3040708989 },
        { time: 1656086400, close: 0.0011332624, high: 0.0011397302, low: 0.0011295939, open: 0.0011390255, volume: 11.6805747156 },
        { time: 1656090000, close: 0.0011293879, high: 0.0011430984, low: 0.0011291709, open: 0.0011332624, volume: 49.299248926 },
        { time: 1656093600, close: 0.0011365194, high: 0.0011372118, low: 0.0011291557, open: 0.0011293864, volume: 430.3643560794 },
        { time: 1656097200, close: 0.0011438832, high: 0.0011438969, low: 0.0011357758, open: 0.0011365194, volume: 1203.7719549938 },
        { time: 1656100800, close: 0.0011488976, high: 0.0011574914, low: 0.0011431359, open: 0.0011438832, volume: 120.5362552479 },
        { time: 1656104400, close: 0.0011574957, high: 0.0011575614, low: 0.0011488523, open: 0.0011489155, volume: 29.6712410796 },
        { time: 1656108000, close: 0.0011661754, high: 0.0011690895, low: 0.001157469, open: 0.0011574957, volume: 997.8233689317 },
        { time: 1656111600, close: 0.0011614022, high: 0.0011680642, low: 0.0011614022, open: 0.0011661754, volume: 843.8276989806 },
        { time: 1656115200, close: 0.0011530421, high: 0.0011614133, low: 0.0011497686, open: 0.0011614022, volume: 15.6986010634 },
        { time: 1656118800, close: 0.001166085, high: 0.0011662802, low: 0.0011517489, open: 0.0011530421, volume: 15.2932709662 },
        { time: 1656122400, close: 0.0011461036, high: 0.0011676873, low: 0.0011460947, open: 0.001166085, volume: 600.5698867551 },
        { time: 1656126000, close: 0.0011581367, high: 0.0011592807, low: 0.0011459313, open: 0.0011461036, volume: 1109.3618721787 },
        { time: 1656129600, close: 0.0011626869, high: 0.0011626869, low: 0.0011568063, open: 0.0011581367, volume: 51.6016947956 },
        { time: 1656133200, close: 0.0011626968, high: 0.0011678857, low: 0.0011626869, open: 0.0011626869, volume: 91.9760635362 },
        { time: 1656136800, close: 0.0011597931, high: 0.0011616266, low: 0.0011588768, open: 0.0011615808, volume: 1184.5185478166 },
        { time: 1656140400, close: 0.0011696125, high: 0.0011722571, low: 0.0011597503, open: 0.0011597931, volume: 420.4116168122 },
        { time: 1656144000, close: 0.0011750072, high: 0.0011755134, low: 0.0011696125, open: 0.0011696125, volume: 0.2560149924 },
        { time: 1656147600, close: 0.0011882508, high: 0.0011921037, low: 0.0011749901, open: 0.0011750072, volume: 226.3778995917 },
        { time: 1656151200, close: 0.0011793478, high: 0.0011882516, low: 0.0011791615, open: 0.0011882508, volume: 1419.2635513093 },
        { time: 1656154800, close: 0.0011703516, high: 0.0011794518, low: 0.0011700882, open: 0.0011793558, volume: 200.3853834203 },
        { time: 1656158400, close: 0.0011498843, high: 0.0011721832, low: 0.0011468909, open: 0.0011703516, volume: 99.8124509894 },
        { time: 1656162000, close: 0.0011517874, high: 0.0011518274, low: 0.0011426317, open: 0.0011498843, volume: 357.1774058918 },
        { time: 1656165600, close: 0.0011477464, high: 0.0011536534, low: 0.0011434183, open: 0.0011517874, volume: 1139.101652757 },
        { time: 1656169200, close: 0.0011318805, high: 0.0011477464, low: 0.0011315872, open: 0.0011477464, volume: 206.7570251749 },
        { time: 1656172800, close: 0.0011385447, high: 0.0011385447, low: 0.0011263211, open: 0.0011318805, volume: 0.8637720437 },
        { time: 1656176400, close: 0.0011457521, high: 0.0011461471, low: 0.001136189, open: 0.0011385011, volume: 177.0262977268 },
        { time: 1656180000, close: 0.0011550993, high: 0.0011553368, low: 0.0011428879, open: 0.0011457521, volume: 1120.4280679944 },
        { time: 1656183600, close: 0.0011736672, high: 0.0011757992, low: 0.0011550912, open: 0.0011550986, volume: 393.3328478295 },
        { time: 1656187200, close: 0.001174506, high: 0.0011893587, low: 0.0011735565, open: 0.0011735937, volume: 0.0544172757 },
        { time: 1656190800, close: 0.0011837612, high: 0.0011842119, low: 0.0011730865, open: 0.001174506, volume: 385.4852260467 },
        { time: 1656194400, close: 0.0011889562, high: 0.0011937393, low: 0.0011816232, open: 0.0011837612, volume: 1200.486058355 },
        { time: 1656198000, close: 0.0011937083, high: 0.001193744, low: 0.0011884895, open: 0.0011889562, volume: 131.4564146701 },
        { time: 1656201600, close: 0.0011928842, high: 0.0011992567, low: 0.0011928842, open: 0.0011937083, volume: 0.8239906296 },
        { time: 1656205200, close: 0.0011784031, high: 0.0011946345, low: 0.0011784031, open: 0.0011928842, volume: 106.4592151397 },
        { time: 1656208800, close: 0.0011735309, high: 0.0011786254, low: 0.00117352, open: 0.0011784031, volume: 1211.5271087592 },
        { time: 1656212400, close: 0.0011766175, high: 0.0011781276, low: 0.0011733863, open: 0.0011735309, volume: 273.2084057287 },
        { time: 1656216000, close: 0.0011739457, high: 0.001176798, low: 0.0011732641, open: 0.0011766175, volume: 10.0932337525 },
        { time: 1656219600, close: 0.0011737217, high: 0.0011741806, low: 0.0011730323, open: 0.0011739457, volume: 514.9490291632 },
        { time: 1656223200, close: 0.0011743714, high: 0.001174516, low: 0.0011651404, open: 0.0011737217, volume: 1000.8378780358 },
        { time: 1656226800, close: 0.0011713706, high: 0.0011779237, low: 0.0011713524, open: 0.0011743714, volume: 9.0980096726 },
        { time: 1656230400, close: 0.001170393, high: 0.0011720904, low: 0.0011692731, open: 0.0011713696, volume: 3.6225070543 },
        { time: 1656234000, close: 0.0011715949, high: 0.0011734588, low: 0.0011686241, open: 0.001170393, volume: 325.4091656263 },
        { time: 1656237600, close: 0.0011744144, high: 0.0011744157, low: 0.0011688359, open: 0.0011715949, volume: 987.7909269429 },
        { time: 1656241200, close: 0.0012050024, high: 0.0012050464, low: 0.0011715211, open: 0.0011744144, volume: 180.975100695 },
        { time: 1656244800, close: 0.0011836243, high: 0.001207739, low: 0.0011836235, open: 0.0012050024, volume: 458.135198237 },
        { time: 1656248400, close: 0.0011967189, high: 0.001196787, low: 0.0011789462, open: 0.0011836243, volume: 862.7794131701 },
        { time: 1656252000, close: 0.001195229, high: 0.0012004913, low: 0.0011950803, open: 0.0011967189, volume: 759.4314170502 },
        { time: 1656255600, close: 0.0011980277, high: 0.0011983398, low: 0.0011832324, open: 0.001195229, volume: 140.7540692417 },
        { time: 1656259200, close: 0.0011946201, high: 0.0012060284, low: 0.0011945804, open: 0.0011980277, volume: 94.4471996065 },
        { time: 1656262800, close: 0.0011903509, high: 0.0011947135, low: 0.0011846646, open: 0.0011946201, volume: 855.4154079932 },
        { time: 1656266400, close: 0.001157158, high: 0.0011923832, low: 0.001157158, open: 0.0011903509, volume: 568.2117832189 },
        { time: 1656270000, close: 0.0011792344, high: 0.0011809834, low: 0.001153416, open: 0.0011767044, volume: 51.5416046969 },
        { time: 1656273600, close: 0.0011980286, high: 0.0012019971, low: 0.0011792344, open: 0.0011792344, volume: 179.7693782791 },
        { time: 1656277200, close: 0.0011864618, high: 0.0012035559, low: 0.0011851382, open: 0.0011980286, volume: 1135.6429670113 },
        { time: 1656280800, close: 0.0011520613, high: 0.0011864649, low: 0.0011454722, open: 0.0011864618, volume: 165.613731481 },
        { time: 1656284400, close: 0.0011390699, high: 0.0011533687, low: 0.0011390548, open: 0.0011520613, volume: 2.3148141418 },
        { time: 1656288000, close: 0.0011438831, high: 0.0011482225, low: 0.001138593, open: 0.0011390699, volume: 414.9739557294 },
        { time: 1656291600, close: 0.0011474448, high: 0.001149646, low: 0.0011398031, open: 0.0011438695, volume: 928.2694200321 },
        { time: 1656295200, close: 0.0011520649, high: 0.0011528798, low: 0.0011465964, open: 0.0011474435, volume: 97.1693693598 },
        { time: 1656298800, close: 0.0011514854, high: 0.0011540257, low: 0.0011511898, open: 0.0011520649, volume: 0.1134193296 },
        { time: 1656302400, close: 0.001161935, high: 0.001161935, low: 0.0011506196, open: 0.0011514854, volume: 340.8426988786 },
        { time: 1656306000, close: 0.0011559248, high: 0.001164153, low: 0.0011557485, open: 0.001161935, volume: 1016.2254329365 },
        { time: 1656309600, close: 0.0011572491, high: 0.0011572491, low: 0.00115303, open: 0.0011559248, volume: 103.8428012884 },
        { time: 1656313200, close: 0.0011683959, high: 0.0011684048, low: 0.0011572352, open: 0.0011572491, volume: 0.4974782254 },
        { time: 1656316800, close: 0.0011731641, high: 0.0011757275, low: 0.0011557598, open: 0.0011683959, volume: 688.2173278775 },
        { time: 1656320400, close: 0.0011803475, high: 0.0011805106, low: 0.0011725643, open: 0.0011731844, volume: 944.6577788352 },
        { time: 1656324000, close: 0.0011840531, high: 0.001184192, low: 0.0011799007, open: 0.0011803475, volume: 9.2809007632 },
        { time: 1656327600, close: 0.001173727, high: 0.0011848895, low: 0.0011733566, open: 0.0011841993, volume: 10.9294219686 },
        { time: 1656331200, close: 0.0011755029, high: 0.0011755033, low: 0.0011655905, open: 0.001173727, volume: 711.9367258478 },
        { time: 1656334800, close: 0.0011450176, high: 0.0011847416, low: 0.0011448698, open: 0.0011753586, volume: 623.6117200542 },
        { time: 1656338400, close: 0.0011446332, high: 0.0011447101, low: 0.0011315805, open: 0.0011446789, volume: 36.2398077901 },
        { time: 1656342000, close: 0.0011496427, high: 0.001151989, low: 0.0011424414, open: 0.0011446332, volume: 37.9615952109 },
        { time: 1656345600, close: 0.0011411866, high: 0.0011496485, low: 0.0011385516, open: 0.0011496427, volume: 959.7542206881 },
        { time: 1656349200, close: 0.0011256291, high: 0.0011411866, low: 0.0011253979, open: 0.0011411866, volume: 386.931991205 },
        { time: 1656352800, close: 0.0011334343, high: 0.0011398464, low: 0.0011164191, open: 0.0011256291, volume: 0.0127443378 },
        { time: 1656356400, close: 0.0011303052, high: 0.0011339194, low: 0.0011255495, open: 0.0011334343, volume: 0.4666486756 },
        { time: 1656360000, close: 0.0011313662, high: 0.0011446079, low: 0.0011302937, open: 0.0011303432, volume: 362.9439466217 },
        { time: 1656363600, close: 0.0011240131, high: 0.0011314469, low: 0.0011167299, open: 0.0011313662, volume: 865.2214635105 },
        { time: 1656367200, close: 0.0011286734, high: 0.0011326056, low: 0.001119925, open: 0.0011240131, volume: 59.4526731367 },
        { time: 1656370800, close: 0.0011059095, high: 0.0011286734, low: 0.0011058565, open: 0.0011286734, volume: 20.5715989952 },
        { time: 1656374400, close: 0.0011073138, high: 0.001113795, low: 0.0011042059, open: 0.0011059095, volume: 857.3170466054 },
        { time: 1656378000, close: 0.0010891543, high: 0.0011101973, low: 0.0010891527, open: 0.0011073139, volume: 441.4819816345 },
        { time: 1656381600, close: 0.0010860999, high: 0.0010892646, low: 0.0010836863, open: 0.0010891126, volume: 0.3536705361 },
        { time: 1656385200, close: 0.0010903534, high: 0.0010930419, low: 0.0010856673, open: 0.0010860999, volume: 226.06102148 },
        { time: 1656388800, close: 0.0010901931, high: 0.0010918355, low: 0.0010887127, open: 0.0010903534, volume: 852.9550555365 },
        { time: 1656392400, close: 0.0010925884, high: 0.0010943444, low: 0.0010901944, open: 0.0010901944, volume: 157.4974668543 },
        { time: 1656396000, close: 0.0011056315, high: 0.0011070614, low: 0.0010901525, open: 0.0010925884, volume: null },
        { time: 1656399600, close: 0.0011114609, high: 0.0011143736, low: 0.0011056315, open: 0.0011056315, volume: 42.7365834645 },
        { time: 1656403200, close: 0.0011232254, high: 0.0011232254, low: 0.0011082446, open: 0.0011114609, volume: 893.5168326042 },
        { time: 1656406800, close: 0.0011243346, high: 0.0011248943, low: 0.0011232133, open: 0.0011232254, volume: 427.642242663 },
        { time: 1656410400, close: 0.00112618, high: 0.0011330786, low: 0.0011215366, open: 0.0011243346, volume: 135.4180696052 },
        { time: 1656414000, close: 0.0011286307, high: 0.0011370131, low: 0.001119726, open: 0.00112618, volume: 29.5891067918 },
        { time: 1656417600, close: 0.0011226231, high: 0.0011301141, low: 0.0011226231, open: 0.0011286307, volume: 866.0179801024 },
        { time: 1656421200, close: 0.0011341989, high: 0.0011345366, low: 0.0011169713, open: 0.0011226231, volume: 398.895976379 },
        { time: 1656424800, close: 0.0011158058, high: 0.0011341989, low: 0.0011115616, open: 0.0011341989, volume: 2.7230059379 },
        { time: 1656428400, close: 0.0011197403, high: 0.0011216167, low: 0.0011069555, open: 0.0011157292, volume: 0.2394551154 },
        { time: 1656432000, close: 0.0011107906, high: 0.001119756, low: 0.0011105301, open: 0.0011197403, volume: 543.7104867744 },
        { time: 1656435600, close: 0.0011151221, high: 0.0011155682, low: 0.0011064642, open: 0.0011107906, volume: 635.835175991 },
        { time: 1656439200, close: 0.0011009851, high: 0.0011151273, low: 0.0010950538, open: 0.0011151221, volume: 242.7009264089 },
        { time: 1656442800, close: 0.0010948765, high: 0.0011022208, low: 0.0010928318, open: 0.0011009851, volume: 7.0628322342 },
        { time: 1656446400, close: 0.001092787, high: 0.0010968468, low: 0.001082399, open: 0.0010948735, volume: 253.2602202744 },
        { time: 1656450000, close: 0.0010978031, high: 0.0010991888, low: 0.0010916415, open: 0.001092787, volume: 745.8558379181 },
        { time: 1656453600, close: 0.0010752164, high: 0.0010988386, low: 0.0010751515, open: 0.0010978031, volume: 114.9568721996 },
        { time: 1656457200, close: 0.0010687769, high: 0.0010753191, low: 0.001068775, open: 0.0010752164, volume: null },
        { time: 1656460800, close: 0.0010722843, high: 0.001074916, low: 0.0010650822, open: 0.0010687769, volume: 293.6975233549 },
        { time: 1656464400, close: 0.0010769814, high: 0.0010769814, low: 0.0010687734, open: 0.0010722842, volume: 777.0309427563 },
        { time: 1656468000, close: 0.0010809491, high: 0.0010809491, low: 0.0010705734, open: 0.0010769814, volume: 74.8380119921 },
        { time: 1656471600, close: 0.0010809542, high: 0.001084346, low: 0.0010774448, open: 0.001080949, volume: 0.0107948379 },
        { time: 1656475200, close: 0.0010972954, high: 0.0010995985, low: 0.0010805551, open: 0.0010809542, volume: 41.050610538 },
        { time: 1656478800, close: 0.0010742593, high: 0.0010973123, low: 0.001073982, open: 0.0010972954, volume: 777.7079255848 },
        { time: 1656482400, close: 0.0010640186, high: 0.0010745027, low: 0.0010615811, open: 0.0010742593, volume: 254.049114231 },
        { time: 1656486000, close: 0.0010746873, high: 0.001074936, low: 0.0010639878, open: 0.0010640186, volume: 0.3498181085 },
        { time: 1656489600, close: 0.001076367, high: 0.0010798539, low: 0.0010746889, open: 0.0010746889, volume: 1.8557011269 },
        { time: 1656493200, close: 0.0010771792, high: 0.0010826295, low: 0.0010736434, open: 0.001076367, volume: 614.6778591873 },
        { time: 1656496800, close: 0.0010695865, high: 0.001078045, low: 0.0010694619, open: 0.0010771792, volume: 551.0160225981 },
        { time: 1656500400, close: 0.0010699036, high: 0.0010840306, low: 0.0010599812, open: 0.0010695865, volume: null },
        { time: 1656504000, close: 0.0010631949, high: 0.001075637, low: 0.0010623038, open: 0.0010699036, volume: 39.0463004934 },
        { time: 1656507600, close: 0.001073955, high: 0.0010783789, low: 0.0010609348, open: 0.0010631949, volume: 734.1132386143 },
        { time: 1656511200, close: 0.0010782063, high: 0.0010793767, low: 0.0010735609, open: 0.0010739535, volume: 269.6368079656 },
        { time: 1656514800, close: 0.0010770627, high: 0.0010782064, low: 0.001070052, open: 0.0010782044, volume: 67.4496516712 },
        { time: 1656518400, close: 0.0010550962, high: 0.0010770718, low: 0.0010548189, open: 0.0010770627, volume: 93.8854550281 },
        { time: 1656522000, close: 0.0010614376, high: 0.0010614376, low: 0.0010544209, open: 0.0010550962, volume: 895.8317914502 },
        { time: 1656525600, close: 0.0010729767, high: 0.0010766125, low: 0.0010615917, open: 0.0010616048, volume: 196.492490926 },
        { time: 1656529200, close: 0.001083976, high: 0.001083976, low: 0.0010712913, open: 0.0010729767, volume: 448.4981774709 },
        { time: 1656532800, close: 0.0010838533, high: 0.0010887438, low: 0.0010752771, open: 0.0010839877, volume: 395.2640550433 },
        { time: 1656536400, close: 0.0010738306, high: 0.0010758847, low: 0.0010737603, open: 0.0010756988, volume: 672.8235392004 },
        { time: 1656540000, close: 0.001078002, high: 0.0010780195, low: 0.0010736452, open: 0.0010738306, volume: 93.7122026976 },
        { time: 1656543600, close: 0.0010748939, high: 0.0010811945, low: 0.0010616951, open: 0.0010780012, volume: 0.1944591069 },
        { time: 1656547200, close: 0.0010648697, high: 0.0010771889, low: 0.0010647534, open: 0.0010748939, volume: 410.1324377266 },
        { time: 1656550800, close: 0.0010685434, high: 0.0010720861, low: 0.0010569972, open: 0.0010650575, volume: 915.559645235 },
        { time: 1656554400, close: 0.0010849595, high: 0.0010900363, low: 0.0010675267, open: 0.0010685433, volume: 123.6813877101 },
        { time: 1656558000, close: 0.0010960383, high: 0.001096052, low: 0.0010765261, open: 0.0010849595, volume: 0.0645498609 },
        { time: 1656561600, close: 0.0010781334, high: 0.001096608, low: 0.0010779729, open: 0.0010960849, volume: 315.7444896186 },
        { time: 1656565200, close: 0.0010720255, high: 0.0010849247, low: 0.0010692795, open: 0.0010781347, volume: 989.2988222064 },
        { time: 1656568800, close: 0.0010510251, high: 0.0010723067, low: 0.0010480695, open: 0.0010720255, volume: 90.0064268888 },
        { time: 1656572400, close: 0.0010473119, high: 0.0010541754, low: 0.0010420813, open: 0.0010510251, volume: 4.4255399155 },
        { time: 1656576000, close: 0.0010270363, high: 0.0010478937, low: 0.001022514, open: 0.0010473119, volume: 177.619902783 },
    ];

    const isDarkMode = useDarkMode();

    const [chartOptions, setChartOptions] = useState<Highcharts.Options>({
        credits: {
            enabled: false,
        },
        title: {
            text: '',
        },
        tooltip: {
            shared: true,
        },
        yAxis: {
            grid: {
                enabled: false,
            },
            gridLineWidth: 0,
        },
        xAxis: {
            grid: {
                enabled: false,
            },
        },
        legend: {
            enabled: false,
        },
    });
    // const lum = useSelector((state: RootState) => state.core.lum);

    useEffect(() => {
        setChartOptions({
            chart: {
                backgroundColor: isDarkMode ? '#2E2E2E' : '#FFFFFF',
            },
            series: [
                {
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 50 },
                        stops: [
                            [0, '#149CF522'],
                            [100, '#FFFFFF'],
                        ],
                    },
                    name: 'Lum',
                    type: 'areaspline',
                    data: data.map((value) => [value.time * 1000, value.close]) }
            ],
            xAxis: {
                ...chartOptions.xAxis,
                type: 'datetime',
            },
            yAxis: {
                ...chartOptions.yAxis,
                title: {
                    text: 'Prices',
                },
                labels: {
                    formatter: ({ value }) => {
                        return `$${numeral(value).format('0,0.0000')}`;
                    },
                },
            },
            tooltip: {
                ...chartOptions.tooltip,
            },
        });
    }, []);

    return (
        <Card>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </Card>
    );
};

export default LumsValue;
