# Changelog

## [0.33.0](https://www.github.com/image-js/image-js/compare/v0.32.0...v0.33.0) (2021-08-30)


### ⚠ BREAKING CHANGES

* Improve MBR speed

### Bug Fixes

* Improve MBR speed ([c77fec2](https://www.github.com/image-js/image-js/commit/c77fec2308bf7d1f23ddc352d21f4f53ee911c8d))

## [0.32.0](https://www.github.com/image-js/image-js/compare/v0.31.4...v0.32.0) (2021-07-09)


### ⚠ BREAKING CHANGES

* auto-correct orientation of JPEG images according to EXIF (#563)
* Removed support for Node.js 10

### Bug Fixes

* auto-correct orientation of JPEG images according to EXIF ([#563](https://www.github.com/image-js/image-js/issues/563)) ([6a2bcf3](https://www.github.com/image-js/image-js/commit/6a2bcf3d479cf4ea700785a17fa4488892a3e448))
* **types:** add flipX and flipY to types ([2c14a85](https://www.github.com/image-js/image-js/commit/2c14a8510f4958f0c39c048300a9b4596f6268ee))
* **types:** remove bilinear from supported resize interpolations ([a96eb4c](https://www.github.com/image-js/image-js/commit/a96eb4c40867b715a4411e85fe13dff005179f5d))


### Miscellaneous Chores

* update dependencies ([ec97242](https://www.github.com/image-js/image-js/commit/ec972424fa6b1e34a65898d0dd4e179d7da0bb0b))

### [0.31.4](https://www.github.com/image-js/image-js/compare/v0.31.3...v0.31.4) (2021-01-21)


### Bug Fixes

* roundness was not 1 for perfect circle ([#548](https://www.github.com/image-js/image-js/issues/548)) ([e73f596](https://www.github.com/image-js/image-js/commit/e73f59606218f274bbace969ae48af3bbe1d8b2a))

### [0.31.3](https://www.github.com/image-js/image-js/compare/v0.31.2...v0.31.3) (2020-12-14)


### Bug Fixes

* update dependencies ([#539](https://www.github.com/image-js/image-js/issues/539)) ([c972f63](https://www.github.com/image-js/image-js/commit/c972f63a181706c65ea144ec1e6a6edf92deba5a))

### [0.31.2](https://www.github.com/image-js/image-js/compare/v0.31.1...v0.31.2) (2020-12-10)


### Performance Improvements

* improve medianFilter ([#537](https://www.github.com/image-js/image-js/issues/537)) ([c341fac](https://www.github.com/image-js/image-js/commit/c341facf65745641510b5c53d1c00e6b3c69697e))

### [0.31.1](https://www.github.com/image-js/image-js/compare/v0.31.0...v0.31.1) (2020-11-17)


### Bug Fixes

* correct hull filled mask ([81a8cd7](https://www.github.com/image-js/image-js/commit/81a8cd713add86fdb46f78024dacc343880d71cd))

## [0.31.0](https://www.github.com/image-js/image-js/compare/v0.30.3...v0.31.0) (2020-11-12)


### Features

* restore old implementations of getMask with hull or mbr ([#532](https://www.github.com/image-js/image-js/issues/532)) ([4d51dbd](https://www.github.com/image-js/image-js/commit/4d51dbd7baffc4cc32d625b2912e4fbdabdf13a0))

### [0.30.3](https://www.github.com/image-js/image-js/compare/v0.30.2...v0.30.3) (2020-10-20)


### Bug Fixes

* **types:** correct return type of Stack.getAverageImage to Image ([#529](https://www.github.com/image-js/image-js/issues/529)) ([ec6588c](https://www.github.com/image-js/image-js/commit/ec6588c2b0152bd865013ffe6fb3e5668c83cae3))

### [0.30.2](https://www.github.com/image-js/image-js/compare/v0.30.1...v0.30.2) (2020-10-18)


### Bug Fixes

* add basic Stack type definition ([#525](https://www.github.com/image-js/image-js/issues/525)) ([d5f1972](https://www.github.com/image-js/image-js/commit/d5f1972fc1f39b506882f46b7c6c7722157bfd4c))

### [0.30.1](https://www.github.com/image-js/image-js/compare/v0.30.0...v0.30.1) (2020-10-13)


### Bug Fixes

* include less files in npm package ([03903a6](https://www.github.com/image-js/image-js/commit/03903a692a3f4801d44d8d017fced52f218d0369))

## [0.30.0](https://www.github.com/image-js/image-js/compare/v0.29.0...v0.30.0) (2020-10-13)


### Bug Fixes

* correct TIFF support in documentation ([7f3993f](https://www.github.com/image-js/image-js/commit/7f3993f189fe8adb32467b9c8522273778392871))
