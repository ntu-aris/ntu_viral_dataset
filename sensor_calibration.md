---
sort: 2
---

# Sensor Calibration 

###Working in progress

This section aims to provide a sample on how to do the calibration with a different coefficient and verify the performance of the calibration results.

Sensor intrinsic and extrinsic calibrations are the most critical factors in getting the higher precision results in the process, such as stereo matching, SLAM, multi-sensor fusion. 

We use a 120(diagonal) degree FOV lens for the stereo camera to ease the process of feature tracking over multiple frames. The 120-degree diagonal FOV is the result of a 100-degree horizontal FOV and 80-degree vertical FOV. And it is common sense that the angle of view of a fisheye lens is usually between 100 and 180 degrees.  So technically, both the [pinhole camera model](https://en.wikipedia.org/wiki/Pinhole_camera_model#:~:text=The%20pinhole%20camera%20model%20describes,are%20used%20to%20focus%20light.) and [fisheye model](https://en.wikipedia.org/wiki/Fisheye_lens) can be used.

In our provided calibration results(fx, fy, cx, cy, k1, k2, d1 and d2), the pinhole camera model is used. But, there are different number of coefficients and models(atan, pinhole, etc.) that one may want to use when using some existing algorithm. 

You can download our calibration datasets for stereo and inertial sensors from the [github repo](https://github.com/ntu-aris/viral_eval). The chessboard pattern should be enough for the atan model used in PTAM and fisheye camera model. The QR code based pattern in the visual inerial calibration dataset should provide enough feature for more modern models in the literature.

## Calibration with OPENCV
Setup
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


## Calibration with Matlab

## Verification of stereo calibration

## Projecting pointclouds into camera image. 
