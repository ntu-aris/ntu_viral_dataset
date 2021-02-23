---
sort: 2
---

# Sensor Calibration 

This section aims to provide a sample on how to do the calibration with a different coefficient and verify the performance of the calibration results.

Sensor intrinsic and extrinsic calibrations are the most critical factors in getting the higher precision results in the process, such as stereo matching, SLAM, multi-sensor fusion. 

We use a 120(diagonal)x100(horizontal)x80(vertical) degree FOV lens for the stereo camera to ease the process of feature tracking over multiple frames. And it is [common sense](https://en.wikipedia.org/wiki/Fisheye_lens) that the angle of view of a fisheye lens is usually between 100 and 180 degrees.  So technically, both the [pinhole camera model](https://en.wikipedia.org/wiki/Pinhole_camera_model) and [fisheye model](https://en.wikipedia.org/wiki/Fisheye_lens) can be used.


<a name="fig-viral-eval-files"></a>
<p align="center">
    <img src="./images/a-Pinhole-camera-model-b-Fisheye-camera-model_W640.jpg" alt="a-Pinhole-camera-model-b-Fisheye-camera-model_W640.jpg" width="50%"/>
</p>
<p style="text-align: center;">Fig 1. Pinhole camera model vs Fisheye camera model</p>

The pinhole camera model is used in our provided calibration results(fx, fy, cx, cy, k1, k2, d1 and d2). But, there are many other choices of number of coefficients and models(atan, pinhole, etc.) that one might need when exploring some existing algorithm. 

You can download our calibration datasets for stereo and inertial sensors from the [github repo](https://github.com/ntu-aris/viral_eval). The chessboard pattern should be enough for the atan model used in PTAM and fisheye camera model. The QR code-based pattern in the visual-inertial calibration dataset should provide enough features for more modern models and appraoches in the literature.



## Calibration with Matlab

Calibration in Matlab is one of eaisest way of getting what you wanted. To start the calibration, you need to run the app by calling 
```Matlab
stereoCameraCalibrator
```
Then load the image by GUI

<a name="fig-viral-eval-files"></a>
<p align="center">
    <img src="./images/matlabcalibration1.PNG" alt="matlabcalibration1.PNG" width="80%"/>
</p>
<p style="text-align: center;">Fig 2. Matlab stereo calibration process 1</p>


Then enter the correct chessboard size of 80mm

<a name="fig-viral-eval-files"></a>
<p align="center">
    <img src="./images/matlabcalibration2.PNG" alt="matlabcalibration2.PNG" width="40%"/>
</p>
<p style="text-align: center;">Fig 3. Matlab stereo calibration process 2</p>


There are different options in calibration parameter settings. In this sample case, we aim to discover the 3rd coefficients in the distortion parameter. After selecting the parameter, press the calibrate button on the top

<a name="fig-viral-eval-files"></a>
<p align="center">
    <img src="./images/matlabcalibration3.PNG" alt="matlabcalibration3.PNG" width="80%"/>
</p>
<p style="text-align: center;">Fig 4. Matlab stereo calibration process 3</p>

After the calibration, the reprojection error and 3D view will be shown below. You may press the show recertified button to view if the line are indeed cross over to the same feature.

<a name="fig-viral-eval-files"></a>
<p align="center">
    <img src="./images/matlabcalibration4.PNG" alt="matlabcalibration4.PNG" width="80%"/>
</p>
<p style="text-align: center;">Fig 5. Matlab stereo calibration process 4</p>

Some of the images yield higher reprojection error, and it is possible to remove part of the images by dragging the line on the reprojection figure to achieve a lower reprojection error. 

<a name="fig-viral-eval-files"></a>
<p align="center">
    <img src="./images/matlabcalibration5.PNG" alt="matlabcalibration5.PNG" width="80%"/>
</p>
<p style="text-align: center;">Fig 6. Matlab stereo calibration process 5</p>

After that you can export the camera paramters to a file. 

Please take note that Matlab notation and Opencv notation are different. To use the Matlab result in Opencv you need to do transpose of the projection matrix and rotation matrix. 
see this [link](https://stackoverflow.com/questions/46651936/convert-between-matlab-stereoparameters-and-opencv-stereorectify-stereo-calibrat/50925828#50925828) for details


To use Matlab to calibrate a fisheye model, you may follow the command line instruction [here](mathworks.com/help/vision/ug/fisheye-calibration-basics.html)
First call
```Matlab
cameraCalibrator
```
Then load the image and select the Fisheye.
At last calibrate and show the result. 
The camera calibration GUI is very similar to the stereo calibrate case.

## Calibration with OPENCV

OPENCV calibration is more complicated and often reqires quite sometime to read and understand.

So to find pattern in chess board, we can use the function, cv.findChessboardCorners().
The chessboard pattern we are using is 9x6 size patten with each square tape measured to be  80mm

```python 
import numpy as np
import cv2 as cv
import glob
# termination criteria
criteria = (cv.TERM_CRITERIA_EPS + cv.TERM_CRITERIA_MAX_ITER, 30, 0.001)
# prepare object points, like (0,0,0), (1,0,0), (2,0,0) ....,(6,5,0)
objp = np.zeros((6*7,3), np.float32)
objp[:,:2] = np.mgrid[0:7,0:6].T.reshape(-1,2)
# Arrays to store object points and image points from all the images.
objpoints = [] # 3d point in real world space
imgpoints = [] # 2d points in image plane.
images = glob.glob('*.png')
for fname in images:
    img = cv.imread(fname)
    gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
    # Find the chess board corners
    ret, corners = cv.findChessboardCorners(gray, (9,6), None)
    # If found, add object points, image points (after refining them)
    if ret == True:
        objpoints.append(objp)
        corners2 = cv.cornerSubPix(gray,corners, (11,11), (-1,-1), criteria)
        imgpoints.append(corners)
        # Draw and display the corners
        cv.drawChessboardCorners(img, (9,6), corners2, ret)
        cv.imshow('img', img)
        cv.waitKey(500)
cv.destroyAllWindows()
```

This script will draw the detected pattern and show it in display window

Now that we have our object points and image points, we are ready to go for calibration. We can use the function, cv.calibrateCamera() which returns the camera matrix, distortion coefficients, rotation and translation vectors etc.


```python 
ret, mtx, dist, rvecs, tvecs = cv.calibrateCamera(objpoints, imgpoints, gray.shape[::-1], None, None)
```


Now, we can take an image and undistort it. OpenCV comes with two methods for doing this. However first, we can refine the camera matrix based on a free scaling parameter using cv.getOptimalNewCameraMatrix().

So, we take a new image (0034.png in this case.)

```python 
img = cv.imread('0034.png')
h,  w = img.shape[:2]
newcameramtx, roi = cv.getOptimalNewCameraMatrix(mtx, dist, (w,h), 1, (w,h))
```

The easier way is to use the opencv internal function and it returns the undistored image.

```python 
# undistort
dst = cv.undistort(img, mtx, dist, None, newcameramtx)
# crop the image
x, y, w, h = roi
dst = dst[y:y+h, x:x+w]
cv.imwrite('calibresult.png', dst)
```

The remapping is more complicated method but often used in stereo matching process.

```python 
# undistort
mapx, mapy = cv.initUndistortRectifyMap(mtx, dist, None, newcameramtx, (w,h), 5)
dst = cv.remap(img, mapx, mapy, cv.INTER_LINEAR)
# crop the image
x, y, w, h = roi
dst = dst[y:y+h, x:x+w]
cv.imshow('dst', dst)
cv.waitKey()
```



## Verification of stereo calibration (working in progress)

## Projecting pointclouds into camera image (working in progress)
