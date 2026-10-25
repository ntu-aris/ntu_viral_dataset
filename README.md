<p align="center">
    <img src="images/demo_eee_01.gif" alt="EEE_01 VIRAL SLAM" width="33%"/>
    <img src="images/demo_sbs_01.gif" alt="SBS_01 VIRAL SLAM" width="33%"/>
    <img src="images/demo_nya_01.gif" alt="NBA_01 VIRAL SLAM" width="33%"/>
</p>

# [NTU VIRAL: A Visual-Inertial-Ranging-Lidar Dataset for Autonomous Aerial Vehicle](https://ntu-aris.github.io/ntu_viral_dataset/)

> 📦 **Latest complete dataset:** Download **NTU VIRAL DATASET**, including all 18 sequences, calibration data and ground truth, from [Hugging Face](https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET).

This site presents the datasets collected from our research Unmanned Aerial Vehicle (UAV) platform, featuring an extensive set of sensors:

* Two 3D lidars
* Two time-synchronized cameras
* Multiple Inertial Measurement Units (IMUs)
* Four Ultra-wideband (UWB) nodes on UAV, ranging to three anchor nodes.

The comprehensive sensor suite resembles that of an autonomous driving car, but features distinct and challenging characteristics of aerial operations. The flight tests are conducted in a variety of both indoor and outdoor conditions.

# Citation
If you use some resource from this data suite, please cite it as

```
@article{nguyen2022ntu,
  title     = {NTU VIRAL: A Visual-Inertial-Ranging-Lidar Dataset, From an Aerial Vehicle Viewpoint},
  author    = {Nguyen, Thien-Minh and Yuan, Shenghai and Cao, Muqing and Lyu, Yang and Nguyen, Thien Hoang and Xie, Lihua},
  journal   = {The International Journal of Robotics Research},
  volume    = {41},
  number    = {3},
  pages     = {270--280},
  year      = {2022},
  publisher = {SAGE Publications Sage UK: London, England}
}
```
[[Journal](https://journals.sagepub.com/doi/full/10.1177/02783649211052312)][[Preprint](https://github.com/ntu-aris/ntu_viral_dataset/blob/gh-pages/docs/NTU_VIRAL_Dataset_Submission.pdf)]

# Updates

**05/02/2023**: Update works using the datasets

**26/09/2022**: Extra sequences (rtp_01, rtp_02, rtp_03, tnp_01, tnp_02, tnp_03, spms_01, spms_02, spms_03) in more challenging scenarios are added.

**12/07/2022**: The ouster pointcloud and IMU messages are found to jitter due to synchronization issues. A script to regularize the ouster pointcloud and imu topics can be downloaded [here](https://github.com/ntu-aris/ntu_viral_dataset/blob/gh-pages/utils/restamp.py).

# Downloads

The primary download links below point to [NTU VIRAL DATASET on Hugging Face](https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET). The original source remains [NTU Data Repository](https://doi.org/10.21979/N9/X39LEK).
An additional original-source mirror is available in this [OneDrive folder](https://entuedu-my.sharepoint.com/:f:/g/personal/shyuan_staff_main_ntu_edu_sg/EvyxXbi1l5tHonBWIQxueBoByr1-E-w7fgRyHNTsCmwFcg).

Groundtruth is included in the bag. Or you can download them in csv formats here: [ground-truth CSVs on Hugging Face](https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/tree/main/ground_truth).

We note that many users forget to check for the 0.4m offset from the IMU to the prism, which is where ground truth is measured.
To help evaluating things more easily, we have written a jupyter and MATLAB scripts to help with the evalution.
Please check out [the tutorial](https://ntu-aris.github.io/ntu_viral_dataset/evaluation_tutorial.html#compensating-for-the-offset) for their use.

<a name="tab-download"></a>
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-6ibf{border-color:inherit;font-size:18px;text-align:center;vertical-align:top}
.tg .tg-v8dz{border-color:inherit;font-size:18px;text-align:left;vertical-align:top}
.tg .tg-9m02{border-color:inherit;color:#00E;font-size:18px;text-align:center;text-decoration:underline;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-6ibf">Name</th>
    <th class="tg-6ibf">Link</th>
    <th class="tg-6ibf">Size</th>
    <th class="tg-6ibf">Duration</th>
    <th class="tg-6ibf">Remark</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-v8dz">eee_01</td>
    <td class="tg-6ibf"><a href="https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/resolve/main/sequences/eee_01.zip?download=true" target="_blank" rel="noopener noreferrer">.zip</a></td>
    <td class="tg-6ibf">8.7 GB</td>
    <td class="tg-6ibf">398.7 s</td>
    <td class="tg-v8dz">Collected at the School of EEE central carpark</td>
  </tr>
  <tr>
    <td class="tg-v8dz">eee_02</td>
    <td class="tg-9m02"><a href="https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/resolve/main/sequences/eee_02.zip?download=true" target="_blank" rel="noopener noreferrer">.zip</a></td>
    <td class="tg-6ibf">7.0 GB</td>
    <td class="tg-6ibf">321.1 s</td>
    <td class="tg-v8dz">Collected at the School of EEE central carpark</td>
  </tr>
  <tr>
    <td class="tg-v8dz">eee_03</td>
    <td class="tg-9m02"><a href="https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/resolve/main/sequences/eee_03.zip?download=true" target="_blank" rel="noopener noreferrer">.zip</a></td>
    <td class="tg-6ibf">4.3 GB</td>
    <td class="tg-6ibf">181.4 s</td>
    <td class="tg-v8dz">Collected at the School of EEE central carpark</td>
  </tr>
  <tr>
    <td class="tg-v8dz">nya_01</td>
    <td class="tg-9m02"><a href="https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/resolve/main/sequences/nya_01.zip?download=true" target="_blank" rel="noopener noreferrer">.zip</a></td>
    <td class="tg-6ibf">8.6 GB</td>
    <td class="tg-6ibf">396.3 s</td>
    <td class="tg-v8dz">Collected inside the Nanyang Auditorium</td>
  </tr>
  <tr>
    <td class="tg-v8dz">nya_02</td>
    <td class="tg-9m02"><a href="https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/resolve/main/sequences/nya_02.zip?download=true" target="_blank" rel="noopener noreferrer">.zip</a></td>
    <td class="tg-6ibf">9.4 GB</td>
    <td class="tg-6ibf">428.7 s</td>
    <td class="tg-v8dz">Collected inside the Nanyang Auditorium</td>
  </tr>
  <tr>
    <td class="tg-v8dz">nya_03</td>
    <td class="tg-9m02"><a href="https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/resolve/main/sequences/nya_03.zip?download=true" target="_blank" rel="noopener noreferrer">.zip</a></td>
    <td class="tg-6ibf">9.0 GB</td>
    <td class="tg-6ibf">411.2 s</td>
    <td class="tg-v8dz">Collected inside the Nanyang Auditorium</td>
  </tr>
  <tr>
    <td class="tg-v8dz">sbs_01</td>
    <td class="tg-9m02"><a href="https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/resolve/main/sequences/sbs_01.zip?download=true" target="_blank" rel="noopener noreferrer">.zip</a></td>
    <td class="tg-6ibf">7.8 GB</td>
    <td class="tg-6ibf">354.2 s</td>
    <td class="tg-v8dz">Collected at the School of Bio. Science's front square</td>
  </tr>
  <tr>
    <td class="tg-v8dz">sbs_02</td>
    <td class="tg-9m02"><a href="https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/resolve/main/sequences/sbs_02.zip?download=true" target="_blank" rel="noopener noreferrer">.zip</a></td>
    <td class="tg-6ibf">8.2 GB</td>
    <td class="tg-6ibf">373.3 s</td>
    <td class="tg-v8dz">Collected at the School of Bio. Science's front square</td>
  </tr>
  <tr>
    <td class="tg-v8dz">sbs_03</td>
    <td class="tg-9m02"><a href="https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/resolve/main/sequences/sbs_03.zip?download=true" target="_blank" rel="noopener noreferrer">.zip</a></td>
    <td class="tg-6ibf">8.5 GB</td>
    <td class="tg-6ibf">389.3 s</td>
    <td class="tg-v8dz">Collected at the School of Bio. Science's front square</td>
  </tr>
  <tr>
    <td class="tg-v8dz">rtp_01</td>
    <td class="tg-9m02"><a href="https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/resolve/main/sequences/rtp_01.zip?download=true" target="_blank" rel="noopener noreferrer">.zip</a></td>
    <td class="tg-6ibf">5.0 GB</td>
    <td class="tg-6ibf">482 s</td>
    <td class="tg-v8dz">Collected at the Research Techno Plaza's carpark</td>
  </tr>
  <tr>
    <td class="tg-v8dz">rtp_02</td>
    <td class="tg-9m02"><a href="https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/resolve/main/sequences/rtp_02.zip?download=true" target="_blank" rel="noopener noreferrer">.zip</a></td>
    <td class="tg-6ibf">5.2 GB</td>
    <td class="tg-6ibf">439 s</td>
    <td class="tg-v8dz">Collected at the Research Techno Plaza's carpark</td>
  </tr>
  <tr>
    <td class="tg-v8dz">rtp_03</td>
    <td class="tg-9m02"><a href="https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/resolve/main/sequences/rtp_03.zip?download=true" target="_blank" rel="noopener noreferrer">.zip</a></td>
    <td class="tg-6ibf">4.0 GB</td>
    <td class="tg-6ibf">355 s</td>
    <td class="tg-v8dz">Collected at the Research Techno Plaza's carpark</td>
  </tr>
  <tr>
    <td class="tg-v8dz">tnp_01</td>
    <td class="tg-9m02"><a href="https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/resolve/main/sequences/tnp_01.zip?download=true" target="_blank" rel="noopener noreferrer">.zip</a></td>
    <td class="tg-6ibf">8.1 GB</td>
    <td class="tg-6ibf">583 s</td>
    <td class="tg-v8dz">Collected inside Research Techno Plaza</td>
  </tr>
  <tr>
    <td class="tg-v8dz">tnp_02</td>
    <td class="tg-9m02"><a href="https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/resolve/main/sequences/tnp_02.zip?download=true" target="_blank" rel="noopener noreferrer">.zip</a></td>
    <td class="tg-6ibf">6.2 GB</td>
    <td class="tg-6ibf">457 s</td>
    <td class="tg-v8dz">Collected inside Research Techno Plaza</td>
  </tr>
  <tr>
    <td class="tg-v8dz">tnp_03</td>
    <td class="tg-9m02"><a href="https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/resolve/main/sequences/tnp_03.zip?download=true" target="_blank" rel="noopener noreferrer">.zip</a></td>
    <td class="tg-6ibf">5.5 GB</td>
    <td class="tg-6ibf">407 s</td>
    <td class="tg-v8dz">Collected inside Research Techno Plaza</td>
  </tr>
  <tr>
    <td class="tg-v8dz">spms_01</td>
    <td class="tg-9m02"><a href="https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/resolve/main/sequences/spms_01.zip?download=true" target="_blank" rel="noopener noreferrer">.zip</a></td>
    <td class="tg-6ibf">5.5 GB</td>
    <td class="tg-6ibf">446 s</td>
    <td class="tg-v8dz">School of Physical and Mathematical Science's Facade</td>
  </tr>
  <tr>
    <td class="tg-v8dz">spms_02</td>
    <td class="tg-9m02"><a href="https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/resolve/main/sequences/spms_02.zip?download=true" target="_blank" rel="noopener noreferrer">.zip</a></td>
    <td class="tg-6ibf">4.0 GB</td>
    <td class="tg-6ibf">398 s</td>
    <td class="tg-v8dz">School of Physical and Mathematical Science's Facade</td>
  </tr>
  <tr>
    <td class="tg-v8dz">spms_03</td>
    <td class="tg-9m02"><a href="https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/resolve/main/sequences/spms_03.zip?download=true" target="_blank" rel="noopener noreferrer">.zip</a></td>
    <td class="tg-6ibf">5.0 GB</td>
    <td class="tg-6ibf">386 s</td>
    <td class="tg-v8dz">School of Physical and Mathematical Science's Facade</td>
  </tr>
  <tr>
    <td class="tg-v8dz"><span style="font-weight:400;font-style:normal">calib_stereo</span></td>
    <td class="tg-9m02"><a href="https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/resolve/main/calibration/calib_stereo.zip?download=true" target="_blank" rel="noopener noreferrer">.zip</a></td>
    <td class="tg-6ibf">49 MB</td>
    <td class="tg-6ibf"> - </td>
    <td class="tg-v8dz">Image pairs for intrinsic calibration</td>
  </tr>
  <tr>
    <td class="tg-v8dz"><span style="font-weight:400;font-style:normal">calib_stereo_imu</span></td>
    <td class="tg-9m02"><a href="https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/resolve/main/calibration/calib_stereo_imu.bag?download=true" target="_blank" rel="noopener noreferrer">.bag</a></td>
    <td class="tg-6ibf">0.96 GB</td>
    <td class="tg-6ibf">131.7 s</td>
    <td class="tg-v8dz">Bag file for stereo camera - IMU calibration using Kalibr</td>
  </tr>
</tbody>
</table>

# Quick use

## 💻 Baseline code

**Choose a baseline for your sensor setup.** This catalogue brings together **63 methods and implementations** and **14 tools or reference resources** for **NTU VIRAL DATASET**, including the original 10 dataset-adapted baselines and additional public implementations.

📖 **[Baseline guide](https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/blob/main/BASELINES.md)** · 📚 **[Papers and BibTeX](REFERENCES.bib)** · 🔎 **[Code and configuration audit](https://huggingface.co/datasets/Yuan-Shenghai/NTU-VIRAL-DATASET/blob/main/metadata/BASELINE_SEARCH_AUDIT.json)**

The guide covers installation, preprocessing, sensor settings, evaluation and licenses. **NTU setup** links open the checked configuration, launch file or usage guide. **Original** credits the upstream project for dataset-adapted forks; **Software notes** identifies resources without a separate paper linked in the catalogue.

**For evaluation:** use the stated sensor topics and calibration, account for the prism offset, and report development sequences and loop-closure settings. See the linked papers for experimental results.

### Visual and visual–inertial methods

| Method / resource | Sensor input / purpose | Code / setup | Paper / reference |
| --- | --- | --- | --- |
| OpenVINS | Stereo/mono + IMU | [Code](https://github.com/brytsknguyen/open_vins) · [NTU setup](https://github.com/brytsknguyen/open_vins/blob/2e0dbbf07c1806d4be7a0e1ff7a6a59e3ef18868/ov_msckf/launch/run_ntuviral.launch) · [Original](https://github.com/rpng/open_vins) | [Paper](https://pgeneva.com/downloads/papers/Geneva2020ICRA.pdf) · [BibTeX](REFERENCES.bib#L12) |
| VINS-Fusion | Stereo + IMU | [Code](https://github.com/brytsknguyen/VINS-Fusion) · [NTU setup](https://github.com/brytsknguyen/VINS-Fusion/blob/3d8bf9e46a513f654e17c7fe58f32681bdffdc31/config/ntuviral/viral_stereo_imu_config.yaml) · [Original](https://github.com/HKUST-Aerial-Robotics/VINS-Fusion) | [Related paper](https://doi.org/10.1109/IROS.2018.8593603) · [VINS-Mono](https://arxiv.org/abs/1708.03852) · [BibTeX 1](REFERENCES.bib#L21) · [BibTeX 2](REFERENCES.bib#L722) · [BibTeX 3](REFERENCES.bib#L732) |
| VINS-Mono | Monocular + IMU | [Code](https://github.com/brytsknguyen/VINS-Mono) · [NTU setup](https://github.com/brytsknguyen/VINS-Mono/blob/392c8c5732d31445b266b9ca2e2f38a5a4d82d55/config/ntuviral/viral_camera_imu_config.yaml) · [Original](https://github.com/HKUST-Aerial-Robotics/VINS-Mono) | [Paper](https://arxiv.org/abs/1708.03852) · [BibTeX 1](REFERENCES.bib#L29) · [BibTeX 2](REFERENCES.bib#L732) |
| DL-VINS-Factory | Stereo/mono + IMU | [Code](https://github.com/limshoonkit/DL-VINS-Factory-ROS2) · [NTU setup](https://github.com/limshoonkit/DL-VINS-Factory-ROS2/blob/436e7aa0e3195cbea955eb6a1ff5cf0c1b715ed6/README.md) | [Paper](https://arxiv.org/abs/2607.01757) · [BibTeX](REFERENCES.bib#L182) |
| ORB-SLAM3 | Mono; stereo + IMU via CARES | [Code](https://github.com/UZ-SLAMLab/ORB_SLAM3) · [NTU setup](https://github.com/thien94/orb_slam3_ros/blob/5d4d50689f6051aec6f967c37251801b90f47e72/launch/ntuviral_mono.launch) | [Paper](https://arxiv.org/abs/2007.11898) · [BibTeX 1](REFERENCES.bib#L239) · [BibTeX 2](REFERENCES.bib#L879) |
| SVO Pro | Monocular + IMU | [Code](https://github.com/uzh-rpg/rpg_svo_pro_open) · [NTU setup](https://github.com/VerruckterWissenschaftler/VIOATA/blob/2462ece4bef190908ef0a5ae0b4b09855a545b08/datasets/configs/pc/svo_config_eee_sbs/eee_sbs_params.yaml) | [Paper](https://doi.org/10.1109/TRO.2016.2623335) · [BibTeX 1](REFERENCES.bib#L247) · [BibTeX 2](REFERENCES.bib#L899) |
| OKVIS2 | Stereo + IMU | [Code](https://github.com/ethz-mrl/okvis2) · [NTU setup](https://github.com/limshoonkit/DL-VINS-Factory-ROS2/blob/436e7aa0e3195cbea955eb6a1ff5cf0c1b715ed6/scripts/okvis2_configs/ntu_viral_stereo.yaml) | [Paper](https://arxiv.org/abs/2202.09199) · [BibTeX 1](REFERENCES.bib#L255) · [BibTeX 2](REFERENCES.bib#L911) |
| D²SLAM (single vehicle) | Stereo + IMU | [Code](https://github.com/HKUST-Aerial-Robotics/D2SLAM) · [NTU setup](https://github.com/HKUST-Aerial-Robotics/D2SLAM/blob/4c33871083e4ae97b97973eb5bd88dc6735359d7/config/NTU_VIRAL/NTU_VIRAL_single.yaml) | [Paper](https://ieeexplore.ieee.org/document/10582478) · [BibTeX](REFERENCES.bib#L263) |


### LiDAR odometry

| Method / resource | Sensor input / purpose | Code / setup | Paper / reference |
| --- | --- | --- | --- |
| A-LOAM | LiDAR | [Code](https://github.com/brytsknguyen/A-LOAM) · [NTU setup](https://github.com/brytsknguyen/A-LOAM/blob/37a5c4788e5f2e7f47750bfe8cde8ccfb0eef607/launch/run_ntuviral.launch) · [Original](https://github.com/HKUST-Aerial-Robotics/A-LOAM) | [Related paper](https://roboticsproceedings.org/rss10/p07.pdf) · [BibTeX 1](REFERENCES.bib#L55) · [BibTeX 2](REFERENCES.bib#L753) |
| Traj-LO | LiDAR | [Code](https://github.com/kevin2431/Traj-LO) · [NTU setup](https://github.com/kevin2431/Traj-LO/blob/ba273d36d4b69a557eedd19ba80e1c90ab30039d/data/config_ntu.yaml) | [Paper](https://doi.org/10.1109/LRA.2024.3352360) · [BibTeX](REFERENCES.bib#L136) |
| DLO | LiDAR; optional IMU initialization | [Code](https://github.com/vectr-ucla/direct_lidar_odometry) · [NTU setup](https://github.com/engcang/SLAM-application/blob/412e162fd7a125df722aa84883541aa7a397cab1/direct_lidar_odometry/launch/ntu1.launch) | [Paper](https://ieeexplore.ieee.org/document/9681177) · [BibTeX](REFERENCES.bib#L276) |
| KISS-ICP | LiDAR | [Code](https://github.com/PRBonn/kiss-icp) · [NTU setup](https://github.com/engcang/SLAM-application/blob/412e162fd7a125df722aa84883541aa7a397cab1/kiss-icp/ros/launch/ntu1.launch) | [Paper](https://www.ipb.uni-bonn.de/wp-content/papercite-data/pdf/vizzo2023ral.pdf) · [BibTeX](REFERENCES.bib#L288) |
| GenZ-ICP | LiDAR | [Code](https://github.com/cocel-postech/genz-icp) · [NTU setup](https://github.com/engcang/SLAM-application/blob/412e162fd7a125df722aa84883541aa7a397cab1/genz-icp/ros/launch/ntu1.launch) | [Paper](https://ieeexplore.ieee.org/document/10753079) · [BibTeX](REFERENCES.bib#L301) |
| MAD-ICP | LiDAR | [Code](https://github.com/rvp-group/mad-icp) · [NTU setup](https://github.com/MapsHD/benchmark-MAD-ICP-to-HDMapping/blob/206f645ba761d9ec194f6cce9449e317741f28a8/README.md) | [Paper](https://ieeexplore.ieee.org/document/10669999) · [BibTeX](REFERENCES.bib#L314) |
| DualQuat-LOAM | LiDAR | [Code](https://github.com/AUROVA-LAB/aurova_odom) · [NTU setup](https://github.com/AUROVA-LAB/aurova_odom/blob/fc8ddc10ae27c9b921347fdc8ff0495a0116b78e/dualquat_LOAM/launch/odomEstimation_NTU_dataset.launch) | [Paper](https://doi.org/10.1016/j.robot.2025.105009) · [BibTeX](REFERENCES.bib#L323) |
| Onion-LO | LiDAR | [Code](https://github.com/huashu996/Onion-LO) · [NTU setup](https://github.com/huashu996/Onion-LO/blob/5cf1d090ecc1b0928ec6e68241bfcc479fe7c71a/onion_lo/config/ntu.yaml) | [Paper](https://doi.org/10.1109/LRA.2025.3600143) · [BibTeX](REFERENCES.bib#L336) |
| MOLA-LO | LiDAR | [Code](https://github.com/MOLAorg/mola_lidar_odometry) · [NTU setup](https://github.com/MOLAorg/mola_input_rosbag1/blob/d1079e427343b5eff108dce4e9ff34008aadda15/mola-cli-launchs/rosbag1_ntu_viral.yaml) | [Paper](https://doi.org/10.1177/02783649251316881) · [BibTeX](REFERENCES.bib#L349) |
| I2EKF-LO | LiDAR | [Code](https://github.com/YWL0720/I2EKF-LO) · [NTU setup](https://github.com/marcinmatecki/I2EKF-LO-to-HDMapping/blob/ddef197af752d9ce7a6b617c6481103d5df26231/README.md) | [Paper](https://arxiv.org/abs/2407.02190) · [BibTeX 1](REFERENCES.bib#L649) · [BibTeX 2](REFERENCES.bib#L1022) |
| AdaCt | LiDAR | [Code](https://github.com/FPSE12/AdaCt) · [NTU setup](https://github.com/FPSE12/AdaCt/blob/493444a34f028c467eeeda80a471ced480c41e6b/launch/run.launch) | [Software notes](https://github.com/FPSE12/AdaCt#readme) · [BibTeX](REFERENCES.bib#L673) |


### LiDAR–inertial methods

| Method / resource | Sensor input / purpose | Code / setup | Paper / reference |
| --- | --- | --- | --- |
| LIO-SAM | LiDAR + IMU | [Code](https://github.com/brytsknguyen/LIO-SAM) · [NTU setup](https://github.com/brytsknguyen/LIO-SAM/blob/43b80a0dd8dd81f5844ba7599448bd18d4cd2b9b/config/ntuviral.yaml) · [Original](https://github.com/TixiaoShan/LIO-SAM) | [Paper](https://arxiv.org/abs/2007.00258) · [BibTeX](REFERENCES.bib#L45) |
| FAST-LIO | LiDAR + IMU | [Code](https://github.com/brytsknguyen/FAST_LIO) · [NTU setup](https://github.com/brytsknguyen/FAST_LIO/blob/339bf1a3dc8256615422ed8579fba1c11d11f576/config/ntuviral.yaml) · [Original](https://github.com/hku-mars/FAST_LIO) | [Paper](https://arxiv.org/abs/2010.08196) · [BibTeX 1](REFERENCES.bib#L63) · [BibTeX 2](REFERENCES.bib#L762) |
| GLIM | LiDAR + IMU; visual extensions | [Code](https://github.com/koide3/glim) · [NTU setup](https://github.com/koide3/glim/blob/1a197c999e4865f5cab7c9cd25474128413ebbca/README.md) | [Paper](https://doi.org/10.1016/j.robot.2024.104750) · [BibTeX 1](REFERENCES.bib#L120) · [BibTeX 2](REFERENCES.bib#L804) |
| SE3-LIO | LiDAR + IMU | [Code](https://github.com/url-kaist/se3-lio) · [NTU setup](https://github.com/url-kaist/se3-lio/blob/e993b21780f87f892be48f87c574e2800c6d1258/config/ntu.yaml) | [Paper](https://arxiv.org/abs/2603.16118) · [BibTeX](REFERENCES.bib#L150) |
| GenZ-LIO | LiDAR + IMU | [Code](https://github.com/cocel-postech/genz-lio) · [NTU setup](https://github.com/cocel-postech/genz-lio/blob/bf444f7a747ed3da8548b56b49c14f207e8d49bb/ros/config/experiments/ntu_viral/os16_spms_01.yaml) | [Paper](https://arxiv.org/abs/2603.16273) · [BibTeX](REFERENCES.bib#L158) |
| D-LIOM | LiDAR + IMU | [Code](https://github.com/peterWon/D-LIOM) · [NTU setup](https://github.com/peterWon/D-LIOM/blob/68ec278379bfa03d3f0e44f9f2bb762867510c6a/src/dlio/config/viral.lua) | [Paper](https://doi.org/10.1109/TMM.2022.3168423) · [BibTeX 1](REFERENCES.bib#L166) · [BibTeX 2](REFERENCES.bib#L835) |
| FAST-LIO2 | LiDAR + IMU | [Code](https://github.com/hku-mars/FAST_LIO) · [NTU setup](https://github.com/engcang/SLAM-application/blob/412e162fd7a125df722aa84883541aa7a397cab1/FAST_LIO/config/ntu1.yaml) | [Paper](https://arxiv.org/abs/2107.06829) · [BibTeX 1](REFERENCES.bib#L362) · [BibTeX 2](REFERENCES.bib#L928) |
| DLIO | LiDAR + IMU | [Code](https://github.com/vectr-ucla/direct_lidar_inertial_odometry) · [NTU setup](https://github.com/engcang/SLAM-application/blob/412e162fd7a125df722aa84883541aa7a397cab1/direct_lidar_inertial_odometry/launch/ntu1.launch) | [Paper](https://ieeexplore.ieee.org/document/10160508) · [BibTeX](REFERENCES.bib#L370) |
| iG-LIO | LiDAR + IMU | [Code](https://github.com/zijiechenrobotics/ig_lio) · [NTU setup](https://github.com/engcang/SLAM-application/blob/412e162fd7a125df722aa84883541aa7a397cab1/ig_lio/config/ntu1.yaml) | [Paper](https://ieeexplore.ieee.org/document/10380742) · [BibTeX](REFERENCES.bib#L380) |
| LOG-LIO | LiDAR + IMU | [Code](https://github.com/tiev-tongji/LOG-LIO) · [NTU setup](https://github.com/tiev-tongji/LOG-LIO/blob/a2f49d66b9e38e05d2e7ebdb2a019c77ea5baf0c/launch/mapping_viral.launch) | [Paper](https://arxiv.org/abs/2307.09531) · [BibTeX](REFERENCES.bib#L392) |
| LOG-LIO2 | LiDAR + IMU | [Code](https://github.com/tiev-tongji/LOG-LIO2) · [NTU setup](https://github.com/tiev-tongji/LOG-LIO2/blob/7eac6659821e9bf4978c7e7648c576c74d6ae935/launch/mapping_viral.launch) | [Paper](https://arxiv.org/abs/2405.01316) · [BibTeX 1](REFERENCES.bib#L404) · [BibTeX 2](REFERENCES.bib#L953) |
| LIO-EKF | LiDAR + IMU | [Code](https://github.com/YibinWu/LIO-EKF) · [NTU setup](https://github.com/YibinWu/LIO-EKF/blob/5a76a92cde8054c0b3456adeab664de2e7167e5b/launch/ntu_viral/eee_01.launch) | [Paper](https://arxiv.org/abs/2311.09887) · [BibTeX](REFERENCES.bib#L412) |
| Hybrid-VoxelMap | LiDAR + IMU | [Code](https://github.com/haiyang2022/Hybrid-VoxelMap) · [NTU setup](https://github.com/haiyang2022/Hybrid-VoxelMap/blob/fb60275e78e010ef85f5c7574fa330774f714373/launch/mapping_ntuviral.launch.py) | [Paper](https://doi.org/10.1109/LRA.2025.3632730) · [BibTeX](REFERENCES.bib#L420) |
| BIEVR-LIO-ESIKF | LiDAR + IMU | [Code](https://github.com/engcang/BIEVR-LIO-ESIKF) · [NTU setup](https://github.com/engcang/BIEVR-LIO-ESIKF/blob/23543322879c19a12f6151499a0074e4cd539d0f/ros2/config/ntu1.yaml) | [Software notes](https://github.com/engcang/BIEVR-LIO-ESIKF#readme) · [BibTeX](REFERENCES.bib#L432) |
| FMCW-LIO (Ouster mode) | LiDAR + IMU; no Doppler | [Code](https://github.com/IMRL/FMCW-LIO) · [NTU setup](https://github.com/IMRL/FMCW-LIO/blob/5c21d1bef29a63946c2ef556dc0882fb7868c57e/launch/ouster16_ntu_viral.launch) | [Paper](https://doi.org/10.1109/LRA.2024.3396636) · [BibTeX](REFERENCES.bib#L440) |
| Surfel-LIO | LiDAR + IMU | [Code](https://github.com/93won/lidar_inertial_odometry) · [NTU setup](https://github.com/93won/lidar_inertial_odometry/blob/2cbfad923583b44d04d3ab078888bd9fe55450db/config/ntu_viral.yaml) | [Paper](https://arxiv.org/abs/2512.03397) · [BibTeX](REFERENCES.bib#L452) |
| Super-LIO | LiDAR + IMU | [Code](https://github.com/Liansheng-Wang/Super-LIO) · [NTU setup](https://github.com/Liansheng-Wang/Super-LIO/blob/f89f48dc7aea6cfa262f18e4d03b319e04e0dbd2/src/super_lio/launch/NTU.py) | [Paper](https://doi.org/10.1109/LRA.2026.3653372) · [BibTeX](REFERENCES.bib#L462) |
| R-VoxelMap | LiDAR + IMU | [Code](https://github.com/NKU-MobFly-Robotics/R-VoxelMap) · [NTU setup](https://github.com/NKU-MobFly-Robotics/R-VoxelMap/blob/50ffbbab3626e384d77f0da91a7e51d5e4b14ff7/launch/ntu.launch) | [Paper](https://arxiv.org/abs/2601.12377) · [BibTeX 1](REFERENCES.bib#L474) · [BibTeX 2](REFERENCES.bib#L962) |
| D-LIO (TSDF) | LiDAR + IMU | [Code](https://github.com/robotics-upo/D-LIO) · [NTU setup](https://github.com/robotics-upo/D-LIO/blob/b70df438c6651c69acd276f98850a711ac676570/launch/dlio_viral_launch.py) | [Paper](https://doi.org/10.1109/LRA.2025.3632615) · [BibTeX](REFERENCES.bib#L482) |
| lidarslam_ros2 / RKO-LIO | LiDAR + IMU | [Code](https://github.com/rsasaki0109/lidar_slam_ros2) · [NTU setup](https://github.com/rsasaki0109/lidar_slam_ros2/blob/d3b45c8811fd8d4388f47b820d505a77ce47977f/lidarslam/param/rko_lio_ntu_viral.yaml) | [Software notes](https://github.com/rsasaki0109/lidar_slam_ros2#readme) · [BibTeX](REFERENCES.bib#L495) |
| RESPLE | LiDAR; optional IMU | [Code](https://github.com/ASIG-X/RESPLE) · [NTU setup](https://github.com/ASIG-X/RESPLE/blob/8a9cb849ca74761875ad3f875cd83f94d7183fcd/resple/launch/resple_eee_02.launch.py) | [Paper](https://doi.org/10.1109/LRA.2025.3604758) · [BibTeX](REFERENCES.bib#L608) |
| LIO-SMF | LiDAR + IMU | [Code](https://github.com/Zhu-YQ/LIO-SMF) · [NTU setup](https://github.com/Zhu-YQ/LIO-SMF/blob/4c892f7e5658618058c17c78a56eae1db8c04713/configs/ntuviral.yaml) | [Paper](https://arxiv.org/abs/2605.09383) · [BibTeX](REFERENCES.bib#L619) |
| BIEVR-SuperOdometry-DataExploitation | LiDAR + IMU | [Code](https://github.com/engcang/BIEVR-SuperOdometry-DataExploitation) · [NTU setup](https://github.com/engcang/BIEVR-SuperOdometry-DataExploitation/blob/d3520a53d63bb27c26746b92f59bb631a8fbe794/ros2/config/datasets/ntu1.yaml) | [Software notes](https://github.com/engcang/BIEVR-SuperOdometry-DataExploitation#readme) · [BibTeX](REFERENCES.bib#L629) |
| Faster-LIO | LiDAR + IMU | [Code](https://github.com/gaoxiang12/faster-lio) · [NTU setup](https://github.com/marcinmatecki/Faster-LIO-to-HDMapping/blob/506f32f2bbca74692813e5f949adf77c9ec99991/README.md) | [Paper](https://doi.org/10.1109/LRA.2022.3152830) · [BibTeX](REFERENCES.bib#L637) |


### Multiple-LiDAR methods

| Method / resource | Sensor input / purpose | Code / setup | Paper / reference |
| --- | --- | --- | --- |
| M-LOAM | Multiple LiDARs | [Code](https://github.com/brytsknguyen/M-LOAM) · [NTU setup](https://github.com/brytsknguyen/M-LOAM/blob/6d941759239d6dba031ae6c2cdebc6b9f8b9b42c/estimator/config/config_ntuviral.yaml) · [Original](https://github.com/gogojjh/M-LOAM) | [Paper](https://arxiv.org/abs/2010.14294) · [BibTeX 1](REFERENCES.bib#L37) · [BibTeX 2](REFERENCES.bib#L744) |
| SLICT | Multiple LiDARs + IMU | [Code](https://github.com/brytsknguyen/SLICT) · [NTU setup](https://github.com/brytsknguyen/SLICT/blob/b5bcff5d9a97b43a8c08057d8effd2482f4933ac/config/ntuviral.yaml) | [SLICT](https://arxiv.org/abs/2211.03900) · [SLICT2 / Eigen](https://doi.org/10.1109/LRA.2024.3391049) · [BibTeX 1](REFERENCES.bib#L79) · [BibTeX 2](REFERENCES.bib#L91) |
| CTE-MLO | Multiple LiDARs | [Code](https://github.com/shenhm516/CTE-MLO) · [NTU setup](https://github.com/shenhm516/CTE-MLO/blob/dbd2dffc1837148ce2f6874c3eccb7211ad2bffc/config/ntuviral.yaml) | [Paper](https://doi.org/10.1109/TFR.2025.3543142) · [BibTeX](REFERENCES.bib#L201) |
| MA-LIO | Two LiDARs + IMU | [Code](https://github.com/minwoo0611/MA-LIO) · [NTU setup](https://github.com/engcang/SLAM-application/blob/412e162fd7a125df722aa84883541aa7a397cab1/ma_lio/MA_LIO/launch/ntu_viral.launch) | [Paper](https://arxiv.org/abs/2305.16792) · [BibTeX](REFERENCES.bib#L503) |
| LOCUS 2.0 | Multiple LiDARs + IMU | [Code](https://github.com/NeBula-Autonomy/LOCUS) · [NTU setup](https://github.com/engcang/SLAM-application/blob/412e162fd7a125df722aa84883541aa7a397cab1/locus2.0/locus/launch/ntuviral.launch) | [Paper](https://arxiv.org/abs/2205.11784) · [BibTeX](REFERENCES.bib#L512) |
| FAST-LIO-MULTI | Multiple LiDARs + IMU | [Code](https://github.com/engcang/FAST_LIO_MULTI) · [NTU setup](https://github.com/engcang/FAST_LIO_MULTI/blob/6c21072e2c12876d7f13697e9f3492fb460c107c/config/ntu_viral.yaml) | [Software notes](https://github.com/engcang/FAST_LIO_MULTI#readme) · [BibTeX](REFERENCES.bib#L524) |
| FSICP — experimental | Two LiDARs | [Code](https://github.com/Pana1v/fft-slice-odometry) · [NTU setup](https://github.com/Pana1v/fft-slice-odometry/blob/a73b99dab8cd5a6dbcfc86b66a13149ad3eed5b7/odom.py) | [Software notes](https://github.com/Pana1v/fft-slice-odometry#readme) · [BibTeX](REFERENCES.bib#L681) |


### LiDAR–visual–inertial methods

| Method / resource | Sensor input / purpose | Code / setup | Paper / reference |
| --- | --- | --- | --- |
| FAST-LIVO | LiDAR + camera + IMU | [Code](https://github.com/hku-mars/FAST-LIVO) · [NTU setup](https://github.com/hku-mars/FAST-LIVO/blob/f7e1af5b10c89ba38c5e2c5e4d458195c58eba6b/config/NTU_VIRAL.yaml) | [Paper](https://arxiv.org/abs/2203.00893) · [BibTeX](REFERENCES.bib#L71) |
| CLIC | LiDAR + camera + IMU | [Code](https://github.com/brytsknguyen/clic) · [NTU setup](https://github.com/brytsknguyen/clic/blob/95d02aa9f57a7837a749e2ecc1ec00489c58a738/config/ct_odometry_ntu.yaml) · [Original](https://github.com/APRIL-ZJU/clic) | [Paper](https://arxiv.org/abs/2302.07456) · [BibTeX](REFERENCES.bib#L103) |
| FAST-LIVO2 | LiDAR + camera + IMU | [Code](https://github.com/hku-mars/FAST-LIVO2) · [NTU setup](https://github.com/hku-mars/FAST-LIVO2/blob/0d2c0346107b75b59934975adec9a6eeeb913c64/config/NTU_VIRAL.yaml) | [Paper](https://arxiv.org/abs/2408.14035) · [BibTeX 1](REFERENCES.bib#L112) · [BibTeX 2](REFERENCES.bib#L779) |
| Ct-LVI | LiDAR + camera + IMU | [Code](https://github.com/peterWon/Ct-LVI) · [NTU setup](https://github.com/peterWon/Ct-LVI/blob/b1cc65df4ddaae2c610efbc1d92009c0eb4d1d46/src/ctlvi/config/viral.lua) | [Paper](https://doi.org/10.1109/TCSVT.2023.3335989) · [BibTeX 1](REFERENCES.bib#L128) · [BibTeX 2](REFERENCES.bib#L815) |
| LIR-LIVO | LiDAR + camera + IMU | [Code](https://github.com/IF-A-CAT/LIR-LIVO) · [NTU setup](https://github.com/IF-A-CAT/LIR-LIVO/blob/11a0fda0ddd6f80fb462e26034e3eb75304ff41a/config/NTU_VIRAL.yaml) | [Paper](https://arxiv.org/abs/2502.08676) · [BibTeX 1](REFERENCES.bib#L174) · [BibTeX 2](REFERENCES.bib#L846) |
| Coco-LIC | LiDAR + camera + IMU | [Code](https://github.com/APRIL-ZJU/Coco-LIC) · [NTU setup](https://github.com/APRIL-ZJU/Coco-LIC/blob/4ead7e423f67b3e15a86de4ee551bb7c752f2cd8/config/ct_odometry_viral.yaml) | [Paper](https://arxiv.org/abs/2309.09808) · [BibTeX](REFERENCES.bib#L192) |
| SR-LIVO | LiDAR + camera + IMU | [Code](https://github.com/ZikangYuan/sr_livo) · [NTU setup](https://github.com/ZikangYuan/sr_livo/blob/97a26660ca0d3723e1556b447d3b7d34f2866555/launch/livo_ntu.launch) | [Paper](https://arxiv.org/abs/2312.16800) · [BibTeX](REFERENCES.bib#L532) |
| R3LIVE | LiDAR + camera + IMU | [Code](https://github.com/hku-mars/r3live) · [NTU setup](https://github.com/ulo-robotics/CARES/blob/87f20ee4c0724614986a5fb8a5435b70f7451ad7/SLAM_algorithms/r3live-ntu_viral/r3live/launch/r3live_ntu_bag.launch) | [Paper](https://arxiv.org/abs/2109.07982) · [BibTeX 1](REFERENCES.bib#L543) · [BibTeX 2](REFERENCES.bib#L971) |
| livo_recon | LiDAR + images + IMU | [Code](https://github.com/bblinn2017/livo_recon) · [NTU setup](https://github.com/bblinn2017/livo_recon/blob/27cc16c6181d80e4d4a14d9e1f466108fe06040b/config/ntu_viral.yaml) | [Software notes](https://github.com/bblinn2017/livo_recon#readme) · [BibTeX](REFERENCES.bib#L665) |


### Mapping and localization

| Method / resource | Sensor input / purpose | Code / setup | Paper / reference |
| --- | --- | --- | --- |
| ImMesh | LiDAR + IMU; meshing | [Code](https://github.com/hku-mars/ImMesh) · [NTU setup](https://github.com/hku-mars/ImMesh/blob/3bbc89e4cd2acfa4797834e79b06e8e86b3fa891/launch/mapping_ntu_viral.launch) | [Paper](https://arxiv.org/abs/2301.05206) · [BibTeX 1](REFERENCES.bib#L551) · [BibTeX 2](REFERENCES.bib#L981) |
| GS-LIVM | LiDAR + camera + IMU; 3DGS | [Code](https://github.com/xieyuser/GS-LIVM) · [NTU setup](https://github.com/xieyuser/GS-LIVM/blob/5daaf48260625aa9625fbad86a17d18593d30a05/launch/livo_ntu.launch) | [Paper](https://arxiv.org/abs/2410.17084) · [BibTeX](REFERENCES.bib#L559) |
| LM-LVIL | LiDAR + camera + IMU + prior map | [Code](https://github.com/asdleng/LiDAR-Visual-Inertial-Localization) · [NTU setup](https://github.com/asdleng/LiDAR-Visual-Inertial-Localization/blob/9366631f3ceab2d501e347e70f32c02c30393219/launch/ntu/eee_01.launch) | [Paper](https://doi.org/10.1109/JSEN.2024.3415170) · [BibTeX 1](REFERENCES.bib#L567) · [BibTeX 2](REFERENCES.bib#L993) |
| PINI-SLAM | LiDAR + IMU | [Code](https://github.com/ohmohmpr/PINI) · [NTU setup](https://github.com/ohmohmpr/PINI/blob/83d175669fd2eda319648a7bbd7115f7e3c07eca/config/lidar_slam/run_ntu_viral.yaml) | [Author paper](https://drive.google.com/file/d/1gY25pfbnZ_KeUwcbUAccAKJr72j1Wias/view?usp=sharing) · [BibTeX 1](REFERENCES.bib#L657) · [BibTeX 2](REFERENCES.bib#L1031) |


### Evaluation, calibration and data tools

| Method / resource | Sensor input / purpose | Code / setup | Paper / reference |
| --- | --- | --- | --- |
| SLAM–UWB calibration and fusion | SLAM poses + UWB | [Code](https://github.com/ntdathp/slam-uwb-calibration) · [NTU setup](https://github.com/ntdathp/slam-uwb-calibration/blob/5ded2fdd8622ee9594273eae3931a1515d44fd9d/launch/run_ntuviral_estimator.launch) | [Paper](https://arxiv.org/abs/2510.05992) · [BibTeX](REFERENCES.bib#L213) |
| Official MATLAB evaluation | Estimated trajectory + GT | [Code](https://github.com/ntu-aris/viral_eval) · [NTU setup](https://github.com/ntu-aris/viral_eval/blob/194dd4595b1fb5e8ae2a5a0c01255f816ab4082f/README.md) | [Software notes](https://github.com/ntu-aris/viral_eval#readme) · [BibTeX](REFERENCES.bib#L863) |
| Official UWB driver | P440 UWB messages | [Code](https://github.com/ntu-aris/uwb_driver) · [NTU setup](https://github.com/ntu-aris/uwb_driver/blob/0e6ae6b81af47b0186a0684f00cb0fe7b24ee36d/README.md) | [Software notes](https://github.com/ntu-aris/uwb_driver#readme) · [BibTeX](REFERENCES.bib#L871) |
| Calibrex | Sensor calibration | [Code](https://github.com/rsasaki0109/Calibrex) · [NTU setup](https://github.com/rsasaki0109/Calibrex/blob/efff1f0b872b7fa03a6bd6bc915c3c69652d3a95/README.md) | [Software notes](https://github.com/rsasaki0109/Calibrex#readme) · [BibTeX](REFERENCES.bib#L223) |
| L2Calib | LiDAR + IMU calibration | [Code](https://github.com/APRIL-ZJU/learn-to-calibrate) · [NTU setup](https://github.com/APRIL-ZJU/learn-to-calibrate/blob/fdc419d53cc7570af0e043bfdf4ed24d658890ef/demo/calib_ntu.sh) | [Paper](https://arxiv.org/abs/2508.06330) · [BibTeX](REFERENCES.bib#L231) |
| Ring FALS | LiDAR → point normals | [Code](https://github.com/tiev-tongji/RingFalsNormal) · [NTU setup](https://github.com/tiev-tongji/RingFalsNormal/blob/7231945fa87aa9dbcaa1aa13ca8a86a671d9020a/launch/normal_viral.launch) | [Software notes](https://github.com/tiev-tongji/RingFalsNormal#readme) · [BibTeX](REFERENCES.bib#L575) |
| BALM 2.0 | LiDAR + initial poses | [Code](https://github.com/hku-mars/BALM) · [NTU setup](https://github.com/hku-mars/BALM/blob/5dc1bf927fcb65ef17f0e687f553c234d6b17365/README.md) | [Paper](https://arxiv.org/abs/2209.08854) · [BibTeX 1](REFERENCES.bib#L583) · [BibTeX 2](REFERENCES.bib#L1005) |
| VIOATA benchmark framework | Camera + IMU pipelines | [Code](https://github.com/VerruckterWissenschaftler/VIOATA) · [NTU setup](https://github.com/VerruckterWissenschaftler/VIOATA/blob/2462ece4bef190908ef0a5ae0b4b09855a545b08/README.md) | [Software notes](https://github.com/VerruckterWissenschaftler/VIOATA#readme) · [BibTeX](REFERENCES.bib#L591) |
| MOLA ROS 1 bag reader | ROS 1 sensor recordings | [Code](https://github.com/MOLAorg/mola_input_rosbag1) · [NTU setup](https://github.com/MOLAorg/mola_input_rosbag1/blob/d1079e427343b5eff108dce4e9ff34008aadda15/mola-cli-launchs/rosbag1_ntu_viral.yaml) | [Software notes](https://github.com/MOLAorg/mola_input_rosbag1#readme) · [BibTeX](REFERENCES.bib#L600) |
| Official FAST-LIO2 sample trajectories | Reference estimated trajectories | [Code](https://github.com/ntu-aris/fastlio2_sample) · [NTU setup](https://github.com/ntu-aris/fastlio2_sample/blob/e9003485b7e37400f238083e8e93ab04acef0e2a/result_eee_01/odometry.csv) | [Software notes](https://github.com/ntu-aris/fastlio2_sample#readme) · [BibTeX](REFERENCES.bib#L1014) |
| PointCloudProjection | LiDAR + images | [Code](https://github.com/brytsknguyen/PointCloudProjection) · [NTU setup](https://github.com/brytsknguyen/PointCloudProjection/blob/16b57dbee076ba382cf9f96a23a81716a41d5b10/extract_img_pcl_from_rosbag.m) | [Software notes](https://github.com/brytsknguyen/PointCloudProjection#readme) · [BibTeX](REFERENCES.bib#L689) |
| traj_eval | Estimated trajectories + GT | [Code](https://github.com/zzwu29/traj_eval) · [NTU setup](https://github.com/zzwu29/traj_eval/blob/83fc007a5c44e5abe41d069ca65d56f08843e0c5/eval/evaluate_multi_methods.m) | [Software notes](https://github.com/zzwu29/traj_eval#readme) · [BibTeX](REFERENCES.bib#L697) |
| bagx | ROS bag / MCAP streams | [Code](https://github.com/rsasaki0109/bagx) · [NTU setup](https://github.com/rsasaki0109/bagx/blob/177ddb17696b4c76f31f44ac6a26b9fdfa1a5478/docs/scoreboard/why-ntu-viral-imu-is-noisy.md) | [Software notes](https://github.com/rsasaki0109/bagx#readme) · [BibTeX](REFERENCES.bib#L705) |
| localization_zoo evaluation adapters | LiDAR / IMU / images; estimated trajectories | [Code](https://github.com/rsasaki0109/localization_zoo) · [NTU setup](https://github.com/rsasaki0109/localization_zoo/blob/7f916f89feba0b596682fa1365b959d6769f720b/evaluation/scripts/run_official_fast_livo2_ntu_bag.sh) | [Software notes](https://github.com/rsasaki0109/localization_zoo#readme) · [BibTeX](REFERENCES.bib#L713) |


### Additional ports and variants

These entries extend methods listed above and are grouped with their parent method.

- **FAST-LIVO — Experimental time-offset variant**: [Code](https://github.com/RuizhiChang/FAST-LIVO-DiffTime) · [NTU setup](https://github.com/RuizhiChang/FAST-LIVO-DiffTime/blob/e0a223772b2ed27c9aed57422d4ed46b8a30373a/config/NTU_VIRAL.yaml). [Software notes](https://github.com/RuizhiChang/FAST-LIVO-DiffTime#readme) · [BibTeX](REFERENCES.bib#L771).
- **FAST-LIVO2 — ROS 2 port**: [Code](https://github.com/U-AMC/FAST-LIVO2-ROS2) · [NTU setup](https://github.com/U-AMC/FAST-LIVO2-ROS2/blob/a09599a288c56b832114d7ad9e898248a4111d9e/launch/mapping_ouster_ntu.launch.py). [Software notes](https://github.com/U-AMC/FAST-LIVO2-ROS2#readme) · [BibTeX](REFERENCES.bib#L788).
- **FAST-LIVO2 — SC_FAST_LIVO2 front end; external PGO required**: [Code](https://github.com/jxk6575/SC_FAST_LIVO2) · [NTU setup](https://github.com/jxk6575/SC_FAST_LIVO2/blob/f39e3d0008af7cbd838b05ccfbad794c66161596/config/NTU_VIRAL.yaml). [Software notes](https://github.com/jxk6575/SC_FAST_LIVO2#readme) · [BibTeX](REFERENCES.bib#L796).
- **Traj-LO — AdaTrajLo fork retaining NTU config**: [Code](https://github.com/deepuav/AdaTrajLo) · [NTU setup](https://github.com/deepuav/AdaTrajLo/blob/4ea9c55246ec370e94945abf0dc9d8620a5dde13/data/config_ntu.yaml). [Software notes](https://github.com/deepuav/AdaTrajLo#readme) · [BibTeX](REFERENCES.bib#L827).
- **Coco-LIC — LICO-mid360 fork retaining NTU config**: [Code](https://github.com/piluohong/LICO-mid360) · [NTU setup](https://github.com/piluohong/LICO-mid360/blob/c64a23d5239946bf6e3ab51bebb5bb62df9ee71e/config/ct_odometry_viral.yaml). [Software notes](https://github.com/piluohong/LICO-mid360#readme) · [BibTeX](REFERENCES.bib#L855).
- **ORB-SLAM3 — CARES stereo-inertial adapter**: [Code](https://github.com/ulo-robotics/CARES) · [NTU setup](https://github.com/ulo-robotics/CARES/blob/87f20ee4c0724614986a5fb8a5435b70f7451ad7/SLAM_algorithms/orb_slam3_ros/launch/ntuviral_stereo_inertial.launch). [Software notes](https://github.com/ulo-robotics/CARES#readme) · [BibTeX](REFERENCES.bib#L891).
- **GenZ-ICP — MapsHD ROS 2 guide**: [Code](https://github.com/MapsHD/benchmark-GenZ-ICP-to-HDMapping) · [NTU setup](https://github.com/MapsHD/benchmark-GenZ-ICP-to-HDMapping/blob/5a12fea52af3f9f9a07d48a9822b12b7cb4afeef/README.md). [Software notes](https://github.com/MapsHD/benchmark-GenZ-ICP-to-HDMapping#readme) · [BibTeX](REFERENCES.bib#L920).
- **FAST-LIO2 — Surfel map / Eigen implementation (ROS 1 and ROS 2)**: [Code](https://github.com/engcang/Surfel-FAST-LIO2-Eigen) · [NTU setup](https://github.com/engcang/Surfel-FAST-LIO2-Eigen/blob/95ce7208b17ec6c273a511b597e8442e7990b43a/ros2/config/ntu1.yaml). [Software notes](https://github.com/engcang/Surfel-FAST-LIO2-Eigen#readme) · [BibTeX](REFERENCES.bib#L937).
- **FAST-LIO2 — FLiVIS community variant**: [Code](https://github.com/allenthreee/FLiVIS) · [NTU setup](https://github.com/allenthreee/FLiVIS/blob/4c96ad5a89ee657c4c5f23610fb8d0a31c70520e/config/NTUviral.yaml). [Software notes](https://github.com/allenthreee/FLiVIS#readme) · [BibTeX](REFERENCES.bib#L945).

Last catalogue check: **26 October 2026**.

# Related works

The datasets were used in the following papers. Please checkout these works if you are interested.
(Please contact us if you would like your work mentioned here).
* [FAST-LIVO: Fast and Tightly-coupled Sparse-Direct LiDAR-Inertial-Visual Odometry](https://github.com/hku-mars/FAST-LIVO)
* [VIRAL SLAM: Tightly Coupled Camera-IMU-UWB-Lidar SLAM](https://arxiv.org/pdf/2105.03296.pdf)
* [MILIOM: Tightly Coupled Multi-Input Lidar-Inertia Odometry and Mapping](https://ieeexplore.ieee.org/document/9431754) (RAL 2021)
* [LIRO: Tightly Coupled Lidar-Inertia-Ranging Odometry](https://arxiv.org/abs/2010.13072) (ICRA 2021)



# Notes:
For more information on the sensors and how to use the dataset, please checkout the other sections.

For resources and other works of our group please checkout our [github](https://github.com/ntu-aris).

If you have some inquiry, please raise an [issue](https://github.com/ntu-aris/ntu_viral_dataset/issues) on github.


# Licence
This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/) and is intended for non-commercial academic use.
If you are interested in using the dataset for commercial purposes please [contact us](mailto:aris.eee.ntu@gmail.com).
