import sharp from 'sharp';

async function resizeImage(inputPath, outputPath, width, height) {
  await sharp(inputPath)
    .resize(width, height, { fit: 'cover' }) // 'cover' garante que vai preencher totalmente
    .toFile(outputPath);
}