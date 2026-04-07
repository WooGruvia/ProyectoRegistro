-- CreateTable
CREATE TABLE `Docente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreCompleto` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `institucion` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Docente_correo_key`(`correo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
