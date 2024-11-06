Search.setIndex({"docnames": ["cpp_src/packet_handler_mech", "cpp_src/packet_raw", "cpp_src/reciever_socket", "cpp_src/ros_driver", "index", "installation"], "filenames": ["cpp_src/packet_handler_mech.rst", "cpp_src/packet_raw.rst", "cpp_src/reciever_socket.rst", "cpp_src/ros_driver.rst", "index.rst", "installation.rst"], "titles": ["Class pkt_hdl_Mech", "Struct packet", "Class receiver_socket", "Class Driver", "Dephan ROS driver documentation-ROS2", "Dephan ROS driver installation"], "terms": {"defin": [0, 1, 2, 3], "ad": 0, "mech_lidar_driv": [0, 1, 2, 3, 5], "includ": [0, 1, 2, 3], "packet_handler_mech": [0, 4], "hp": 0, "public": [0, 1, 2, 3], "dephan_ro": [0, 1], "packet": [0, 2, 3], "handl": [0, 3], "raw": 0, "deriv": 0, "from": [0, 3], "base": [0, 1, 3], "function": [0, 2, 3], "raw_packet_t": [0, 1], "pkt": 0, "constructor": [0, 3], "const": [0, 1], "delet": 0, "disabl": 0, "copi": 0, "oper": 0, "assign": 0, "member": [0, 3], "float": 0, "rang": 0, "chanel": 0, "0": 0, "point": 0, "within": 0, "one": [0, 3], "scan": 0, "angl": 0, "raw_pkt": 0, "have": 0, "handel": 0, "static": [0, 1], "attribut": [0, 1], "uint8_t": [0, 1, 2], "magic": 0, "0x68": 0, "": [0, 1, 3], "byte": 0, "int": [0, 2], "125": 0, "number": 0, "photodetect": 0, "unit": 0, "protocol_vers": 0, "0x00": 0, "version": 0, "commun": 0, "protocol": 0, "constexpr": 0, "rad_resolut": 0, "2": [0, 3, 5], "3": [0, 5], "1415": 0, "2250": 0, "resolut": 0, "packet_raw": [1, 4], "hpp": [1, 2, 3, 4], "class": 1, "subclass": 1, "pkt_hdl_mech": 1, "type": 1, "typedef": 1, "std": [1, 2, 3], "unique_ptr": [1, 3], "unsign": [1, 3], "pkt_len": 1, "1016": 1, "mechan": 1, "lidar": [1, 3, 4], "singl": [1, 2], "length": 1, "reciever_socket": [2, 4], "string": [2, 3], "ip_addr": [2, 3], "port": [2, 3], "construct": 2, "open": 2, "socket": [2, 3], "specif": 2, "ip": [2, 3], "address": [2, 3], "paramet": [2, 3], "config": 2, "devic": [2, 3], "configur": 2, "destruct": 2, "udp": [2, 3], "server": 2, "close": 2, "get_packet": 2, "buf": 2, "len": 2, "get": 2, "data": [2, 3, 5], "buffer": 2, "lenght": 2, "ros_driv": [3, 4], "ro": 3, "nodehandl": 3, "nh": 3, "topic_nam": 3, "mode": 3, "node": [3, 4, 5], "network": 3, "name": 3, "topic": 3, "pointcloud": 3, "v2": 3, "messag": 3, "gener": 3, "pcap_path": 3, "pcap": 3, "construcror": 3, "path": 3, "target": 3, "file": 3, "void": 3, "poll": 3, "poll_ful": 3, "18": 3, "pair": 3, "get_network_param": 3, "getter": 3, "privat": 3, "_poll_udp": 3, "pi": 3, "rad": 3, "segment": 3, "per": 3, "_poll_pcap": 3, "_poll_full_udp": 3, "upd": 3, "_poll_full_pcap": 3, "pill": 3, "receiver_socket": 3, "pointer": 3, "reciev": 3, "read": 3, "tin": 3, "filesniff": 3, "pcap_sniff": 3, "libtin": 3, "shiffer": 3, "long": 3, "_prev_pkt_tmstmp": 3, "store": 3, "timestamp": 3, "time": 3, "correct": 3, "publish": 3, "rawdata_publihs": 3, "rawdata": 3, "pointcloud_publish": 3, "v1": 3, "pointcloud2_publish": 3, "To": 4, "instal": 4, "all": 4, "neccesari": 4, "packag": [4, 5], "setup": [4, 5], "pleas": [4, 5], "follow": [4, 5], "guid": 4, "The": 4, "purpos": 4, "thi": 4, "i": [4, 5], "provid": 4, "conveni": 4, "easi": 4, "us": 4, "support": 4, "llc": [4, 5], "There": 4, "ar": [4, 5], "some": 4, "structur": 4, "part": 4, "contai": 4, "contain": 4, "also": 4, "you": [4, 5], "can": 4, "test": [4, 5], "your": 4, "describ": 4, "run": 4, "dephan_nod": 4, "cpp": 4, "wa": 5, "under": 5, "noetic": 5, "iron": 5, "distribut": 5, "onli": 5, "enough": 5, "For": 5, "command": 5, "git": 5, "clone": 5, "http": 5, "github": 5, "com": 5, "cd": 5, "catkin_mak": 5, "sourc": 5, "devel": 5, "bash": 5, "now": 5, "readi": 5, "In": 5, "tetmin": 5, "1": 5, "ubuntu": 5, "roscor": 5, "termin": 5, "rosrun": 5, "mech_driv": 5, "rostop": 5, "echo": 5, "point_cloud2_data": 5, "should": 5, "see": 5, "stream": 5}, "objects": {"": [[3, 0, 1, "_CPPv4N10dephan_ros6DriverE", "dephan_ros::Driver"], [3, 1, 1, "_CPPv4N10dephan_ros6Driver6DriverEN3ros10NodeHandleENSt6stringENSt6stringE", "dephan_ros::Driver::Driver"], [3, 1, 1, "_CPPv4N10dephan_ros6Driver6DriverEN3ros10NodeHandleENSt6stringEjNSt6stringE", "dephan_ros::Driver::Driver"], [3, 2, 1, "_CPPv4N10dephan_ros6Driver6DriverEN3ros10NodeHandleENSt6stringEjNSt6stringE", "dephan_ros::Driver::Driver::ip_addr"], [3, 2, 1, "_CPPv4N10dephan_ros6Driver6DriverEN3ros10NodeHandleENSt6stringENSt6stringE", "dephan_ros::Driver::Driver::nh"], [3, 2, 1, "_CPPv4N10dephan_ros6Driver6DriverEN3ros10NodeHandleENSt6stringEjNSt6stringE", "dephan_ros::Driver::Driver::nh"], [3, 2, 1, "_CPPv4N10dephan_ros6Driver6DriverEN3ros10NodeHandleENSt6stringENSt6stringE", "dephan_ros::Driver::Driver::pcap_path"], [3, 2, 1, "_CPPv4N10dephan_ros6Driver6DriverEN3ros10NodeHandleENSt6stringEjNSt6stringE", "dephan_ros::Driver::Driver::port"], [3, 2, 1, "_CPPv4N10dephan_ros6Driver6DriverEN3ros10NodeHandleENSt6stringENSt6stringE", "dephan_ros::Driver::Driver::topic_name"], [3, 2, 1, "_CPPv4N10dephan_ros6Driver6DriverEN3ros10NodeHandleENSt6stringEjNSt6stringE", "dephan_ros::Driver::Driver::topic_name"], [3, 1, 1, "_CPPv4N10dephan_ros6Driver15_poll_full_pcapEv", "dephan_ros::Driver::_poll_full_pcap"], [3, 1, 1, "_CPPv4N10dephan_ros6Driver14_poll_full_udpEv", "dephan_ros::Driver::_poll_full_udp"], [3, 1, 1, "_CPPv4N10dephan_ros6Driver10_poll_pcapEv", "dephan_ros::Driver::_poll_pcap"], [3, 1, 1, "_CPPv4N10dephan_ros6Driver9_poll_udpEv", "dephan_ros::Driver::_poll_udp"], [3, 3, 1, "_CPPv4N10dephan_ros6Driver16_prev_pkt_tmstmpE", "dephan_ros::Driver::_prev_pkt_tmstmp"], [3, 1, 1, "_CPPv4N10dephan_ros6Driver18get_network_paramsEv", "dephan_ros::Driver::get_network_params"], [3, 3, 1, "_CPPv4N10dephan_ros6Driver7ip_addrE", "dephan_ros::Driver::ip_addr"], [3, 3, 1, "_CPPv4N10dephan_ros6Driver9pcap_pathE", "dephan_ros::Driver::pcap_path"], [3, 3, 1, "_CPPv4N10dephan_ros6Driver12pcap_snifferE", "dephan_ros::Driver::pcap_sniffer"], [3, 3, 1, "_CPPv4N10dephan_ros6Driver21pointcloud2_publisherE", "dephan_ros::Driver::pointcloud2_publisher"], [3, 3, 1, "_CPPv4N10dephan_ros6Driver20pointcloud_publisherE", "dephan_ros::Driver::pointcloud_publisher"], [3, 1, 1, "_CPPv4N10dephan_ros6Driver4pollEv", "dephan_ros::Driver::poll"], [3, 1, 1, "_CPPv4N10dephan_ros6Driver9poll_fullEv", "dephan_ros::Driver::poll_full"], [3, 3, 1, "_CPPv4N10dephan_ros6Driver4portE", "dephan_ros::Driver::port"], [3, 3, 1, "_CPPv4N10dephan_ros6Driver17rawdata_publihserE", "dephan_ros::Driver::rawdata_publihser"], [3, 3, 1, "_CPPv4N10dephan_ros6Driver6socketE", "dephan_ros::Driver::socket"], [1, 0, 1, "_CPPv4N10dephan_ros6packetE", "dephan_ros::packet"], [1, 3, 1, "_CPPv4N10dephan_ros6packet7PKT_LENE", "dephan_ros::packet::PKT_LEN"], [1, 4, 1, "_CPPv4N10dephan_ros6packet12raw_packet_tE", "dephan_ros::packet::raw_packet_t"], [0, 0, 1, "_CPPv4N10dephan_ros12pkt_hdl_MechE", "dephan_ros::pkt_hdl_Mech"], [0, 3, 1, "_CPPv4N10dephan_ros12pkt_hdl_Mech8CHANELLSE", "dephan_ros::pkt_hdl_Mech::CHANELLS"], [0, 3, 1, "_CPPv4N10dephan_ros12pkt_hdl_Mech14RAD_RESOLUTIONE", "dephan_ros::pkt_hdl_Mech::RAD_RESOLUTION"], [0, 3, 1, "_CPPv4N10dephan_ros12pkt_hdl_Mech6anglesE", "dephan_ros::pkt_hdl_Mech::angles"], [0, 3, 1, "_CPPv4N10dephan_ros12pkt_hdl_Mech5magicE", "dephan_ros::pkt_hdl_Mech::magic"], [0, 1, 1, "_CPPv4N10dephan_ros12pkt_hdl_MechaSERK12pkt_hdl_Mech", "dephan_ros::pkt_hdl_Mech::operator="], [0, 1, 1, "_CPPv4N10dephan_ros12pkt_hdl_Mech12pkt_hdl_MechE12raw_packet_t", "dephan_ros::pkt_hdl_Mech::pkt_hdl_Mech"], [0, 1, 1, "_CPPv4N10dephan_ros12pkt_hdl_Mech12pkt_hdl_MechERK12pkt_hdl_Mech", "dephan_ros::pkt_hdl_Mech::pkt_hdl_Mech"], [0, 2, 1, "_CPPv4N10dephan_ros12pkt_hdl_Mech12pkt_hdl_MechE12raw_packet_t", "dephan_ros::pkt_hdl_Mech::pkt_hdl_Mech::pkt"], [0, 3, 1, "_CPPv4N10dephan_ros12pkt_hdl_Mech16protocol_versionE", "dephan_ros::pkt_hdl_Mech::protocol_version"], [0, 3, 1, "_CPPv4N10dephan_ros12pkt_hdl_Mech6rangesE", "dephan_ros::pkt_hdl_Mech::ranges"], [0, 3, 1, "_CPPv4N10dephan_ros12pkt_hdl_Mech7raw_pktE", "dephan_ros::pkt_hdl_Mech::raw_pkt"], [2, 0, 1, "_CPPv4N10dephan_ros15receiver_socketE", "dephan_ros::receiver_socket"], [2, 1, 1, "_CPPv4N10dephan_ros15receiver_socket10get_packetEP7uint8_ti", "dephan_ros::receiver_socket::get_packet"], [2, 2, 1, "_CPPv4N10dephan_ros15receiver_socket10get_packetEP7uint8_ti", "dephan_ros::receiver_socket::get_packet::buf"], [2, 2, 1, "_CPPv4N10dephan_ros15receiver_socket10get_packetEP7uint8_ti", "dephan_ros::receiver_socket::get_packet::len"], [2, 1, 1, "_CPPv4N10dephan_ros15receiver_socket15receiver_socketENSt6stringEi", "dephan_ros::receiver_socket::receiver_socket"], [2, 2, 1, "_CPPv4N10dephan_ros15receiver_socket15receiver_socketENSt6stringEi", "dephan_ros::receiver_socket::receiver_socket::ip_addr"], [2, 2, 1, "_CPPv4N10dephan_ros15receiver_socket15receiver_socketENSt6stringEi", "dephan_ros::receiver_socket::receiver_socket::port"], [2, 1, 1, "_CPPv4N10dephan_ros15receiver_socketD0Ev", "dephan_ros::receiver_socket::~receiver_socket"]]}, "objtypes": {"0": "cpp:class", "1": "cpp:function", "2": "cpp:functionParam", "3": "cpp:member", "4": "cpp:type"}, "objnames": {"0": ["cpp", "class", "C++ class"], "1": ["cpp", "function", "C++ function"], "2": ["cpp", "functionParam", "C++ function parameter"], "3": ["cpp", "member", "C++ member"], "4": ["cpp", "type", "C++ type"]}, "titleterms": {"class": [0, 2, 3], "pkt_hdl_mech": 0, "document": [0, 1, 2, 3, 4], "struct": 1, "packet": 1, "receiver_socket": 2, "driver": [3, 4, 5], "dephan": [4, 5], "ro": [4, 5], "ros2": 4, "quick": 4, "start": 4, "project": 4, "strucrut": 4, "link": 4, "instal": 5, "support": 5, "platfrorm": 5, "requir": 5, "build": 5, "run": 5}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 58}, "alltitles": {"Class pkt_hdl_Mech": [[0, "class-pkt-hdl-mech"]], "Class Documentation": [[0, "class-documentation"], [2, "class-documentation"], [3, "class-documentation"]], "Struct packet": [[1, "struct-packet"]], "Struct Documentation": [[1, "struct-documentation"]], "Class receiver_socket": [[2, "class-receiver-socket"]], "Class Driver": [[3, "class-driver"]], "Dephan ROS driver documentation-ROS2": [[4, "dephan-ros-driver-documentation-ros2"]], "Quick start": [[4, "quick-start"]], "Project strucrute": [[4, "project-strucrute"]], "Quick links": [[4, "quick-links"]], "Dephan ROS driver installation": [[5, "dephan-ros-driver-installation"]], "Supported platfrorms": [[5, "supported-platfrorms"]], "Requirements": [[5, "requirements"]], "Build and run": [[5, "build-and-run"]]}, "indexentries": {"dephan_ros::pkt_hdl_mech (c++ class)": [[0, "_CPPv4N10dephan_ros12pkt_hdl_MechE"]], "dephan_ros::pkt_hdl_mech::chanells (c++ member)": [[0, "_CPPv4N10dephan_ros12pkt_hdl_Mech8CHANELLSE"]], "dephan_ros::pkt_hdl_mech::rad_resolution (c++ member)": [[0, "_CPPv4N10dephan_ros12pkt_hdl_Mech14RAD_RESOLUTIONE"]], "dephan_ros::pkt_hdl_mech::angles (c++ member)": [[0, "_CPPv4N10dephan_ros12pkt_hdl_Mech6anglesE"]], "dephan_ros::pkt_hdl_mech::magic (c++ member)": [[0, "_CPPv4N10dephan_ros12pkt_hdl_Mech5magicE"]], "dephan_ros::pkt_hdl_mech::operator= (c++ function)": [[0, "_CPPv4N10dephan_ros12pkt_hdl_MechaSERK12pkt_hdl_Mech"]], "dephan_ros::pkt_hdl_mech::pkt_hdl_mech (c++ function)": [[0, "_CPPv4N10dephan_ros12pkt_hdl_Mech12pkt_hdl_MechE12raw_packet_t"], [0, "_CPPv4N10dephan_ros12pkt_hdl_Mech12pkt_hdl_MechERK12pkt_hdl_Mech"]], "dephan_ros::pkt_hdl_mech::protocol_version (c++ member)": [[0, "_CPPv4N10dephan_ros12pkt_hdl_Mech16protocol_versionE"]], "dephan_ros::pkt_hdl_mech::ranges (c++ member)": [[0, "_CPPv4N10dephan_ros12pkt_hdl_Mech6rangesE"]], "dephan_ros::pkt_hdl_mech::raw_pkt (c++ member)": [[0, "_CPPv4N10dephan_ros12pkt_hdl_Mech7raw_pktE"]], "dephan_ros::packet (c++ struct)": [[1, "_CPPv4N10dephan_ros6packetE"]], "dephan_ros::packet::pkt_len (c++ member)": [[1, "_CPPv4N10dephan_ros6packet7PKT_LENE"]], "dephan_ros::packet::raw_packet_t (c++ type)": [[1, "_CPPv4N10dephan_ros6packet12raw_packet_tE"]], "dephan_ros::receiver_socket (c++ class)": [[2, "_CPPv4N10dephan_ros15receiver_socketE"]], "dephan_ros::receiver_socket::get_packet (c++ function)": [[2, "_CPPv4N10dephan_ros15receiver_socket10get_packetEP7uint8_ti"]], "dephan_ros::receiver_socket::receiver_socket (c++ function)": [[2, "_CPPv4N10dephan_ros15receiver_socket15receiver_socketENSt6stringEi"]], "dephan_ros::receiver_socket::~receiver_socket (c++ function)": [[2, "_CPPv4N10dephan_ros15receiver_socketD0Ev"]], "dephan_ros::driver (c++ class)": [[3, "_CPPv4N10dephan_ros6DriverE"]], "dephan_ros::driver::driver (c++ function)": [[3, "_CPPv4N10dephan_ros6Driver6DriverEN3ros10NodeHandleENSt6stringENSt6stringE"], [3, "_CPPv4N10dephan_ros6Driver6DriverEN3ros10NodeHandleENSt6stringEjNSt6stringE"]], "dephan_ros::driver::_poll_full_pcap (c++ function)": [[3, "_CPPv4N10dephan_ros6Driver15_poll_full_pcapEv"]], "dephan_ros::driver::_poll_full_udp (c++ function)": [[3, "_CPPv4N10dephan_ros6Driver14_poll_full_udpEv"]], "dephan_ros::driver::_poll_pcap (c++ function)": [[3, "_CPPv4N10dephan_ros6Driver10_poll_pcapEv"]], "dephan_ros::driver::_poll_udp (c++ function)": [[3, "_CPPv4N10dephan_ros6Driver9_poll_udpEv"]], "dephan_ros::driver::_prev_pkt_tmstmp (c++ member)": [[3, "_CPPv4N10dephan_ros6Driver16_prev_pkt_tmstmpE"]], "dephan_ros::driver::get_network_params (c++ function)": [[3, "_CPPv4N10dephan_ros6Driver18get_network_paramsEv"]], "dephan_ros::driver::ip_addr (c++ member)": [[3, "_CPPv4N10dephan_ros6Driver7ip_addrE"]], "dephan_ros::driver::pcap_path (c++ member)": [[3, "_CPPv4N10dephan_ros6Driver9pcap_pathE"]], "dephan_ros::driver::pcap_sniffer (c++ member)": [[3, "_CPPv4N10dephan_ros6Driver12pcap_snifferE"]], "dephan_ros::driver::pointcloud2_publisher (c++ member)": [[3, "_CPPv4N10dephan_ros6Driver21pointcloud2_publisherE"]], "dephan_ros::driver::pointcloud_publisher (c++ member)": [[3, "_CPPv4N10dephan_ros6Driver20pointcloud_publisherE"]], "dephan_ros::driver::poll (c++ function)": [[3, "_CPPv4N10dephan_ros6Driver4pollEv"]], "dephan_ros::driver::poll_full (c++ function)": [[3, "_CPPv4N10dephan_ros6Driver9poll_fullEv"]], "dephan_ros::driver::port (c++ member)": [[3, "_CPPv4N10dephan_ros6Driver4portE"]], "dephan_ros::driver::rawdata_publihser (c++ member)": [[3, "_CPPv4N10dephan_ros6Driver17rawdata_publihserE"]], "dephan_ros::driver::socket (c++ member)": [[3, "_CPPv4N10dephan_ros6Driver6socketE"]]}})