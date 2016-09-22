import Image from '../image';
import {RGB} from '../model/model';

/**
 * Make a copy of the current image and convert to RGBA
 * The source image must have RGB color model, 8 or 16 bits.
 * This method will add an alpha channel if required.
 * @memberof Image
 * @instance
 * @returns {Image} - New image in RGB color model with alpha channel
 * @example
 * var rgbaImage = image.rgba();
 */

export default function rgba() {
    this.checkProcessable('rgba', {
        bitDepth: [8, 16],
        alpha: [0,1],
        colorModel: [RGB]
    });

    if (this.colorModel === RGB && this.alpha) {
        return this.clone();
    }

    let newImage = Image.createFrom(this, {
        alpha: 1
    });

    let ptr = 0;
    let data = this.data;
    for (let i = 0; i < data.length; i += this.channels) {
        newImage.data[ptr++] = data[i];
        newImage.data[ptr++] = data[i + 1];
        newImage.data[ptr++] = data[i + 2];
        newImage.data[ptr++] = this.maxValue;
        ptr++;
    }

    return newImage;
}
