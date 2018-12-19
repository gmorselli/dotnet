
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 12/18/2018 13:03:44
-- Generated from EDMX file: C:\Users\Contrader_109\Desktop\DotNet AmebaDevices\AssetManagementBase\AmebaDevice\Model.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [dbamebadevice];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_CustomerBuilding]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Building] DROP CONSTRAINT [FK_CustomerBuilding];
GO
IF OBJECT_ID(N'[dbo].[FK_BuildingFloor]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Floor] DROP CONSTRAINT [FK_BuildingFloor];
GO
IF OBJECT_ID(N'[dbo].[FK_FloorRoom]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Room] DROP CONSTRAINT [FK_FloorRoom];
GO
IF OBJECT_ID(N'[dbo].[FK_CustomerThing]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Thing] DROP CONSTRAINT [FK_CustomerThing];
GO
IF OBJECT_ID(N'[dbo].[FK_BuildingThing]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Thing] DROP CONSTRAINT [FK_BuildingThing];
GO
IF OBJECT_ID(N'[dbo].[FK_RoomItem]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Item] DROP CONSTRAINT [FK_RoomItem];
GO
IF OBJECT_ID(N'[dbo].[FK_ItemTypeItem]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Item] DROP CONSTRAINT [FK_ItemTypeItem];
GO
IF OBJECT_ID(N'[dbo].[FK_ThingItem]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Item] DROP CONSTRAINT [FK_ThingItem];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Customer]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Customer];
GO
IF OBJECT_ID(N'[dbo].[Building]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Building];
GO
IF OBJECT_ID(N'[dbo].[Floor]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Floor];
GO
IF OBJECT_ID(N'[dbo].[Room]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Room];
GO
IF OBJECT_ID(N'[dbo].[Thing]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Thing];
GO
IF OBJECT_ID(N'[dbo].[ItemType]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ItemType];
GO
IF OBJECT_ID(N'[dbo].[Item]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Item];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Customer'
CREATE TABLE [dbo].[Customer] (
    [CustomerID] int IDENTITY(1,1) NOT NULL,
    [Nome] nvarchar(max)  NOT NULL,
    [Cognome] nvarchar(max)  NOT NULL,
    [Username] nvarchar(max)  NOT NULL,
    [Password] nvarchar(max)  NOT NULL,
    [Email] nvarchar(max)  NOT NULL,
    [User_role] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Building'
CREATE TABLE [dbo].[Building] (
    [BuildingID] int IDENTITY(1,1) NOT NULL,
    [Indirizzo] nvarchar(max)  NOT NULL,
    [Cap] nvarchar(max)  NOT NULL,
    [Citta] nvarchar(max)  NOT NULL,
    [Interno] nvarchar(max)  NOT NULL,
    [Customer_CustomerID] int  NULL
);
GO

-- Creating table 'Floor'
CREATE TABLE [dbo].[Floor] (
    [FloorID] int IDENTITY(1,1) NOT NULL,
    [Nome] nvarchar(max)  NOT NULL,
    [Descrizione] nvarchar(max)  NOT NULL,
    [Building_BuildingID] int  NOT NULL
);
GO

-- Creating table 'Room'
CREATE TABLE [dbo].[Room] (
    [RoomId] int IDENTITY(1,1) NOT NULL,
    [Nome] nvarchar(max)  NOT NULL,
    [Descrizione] nvarchar(max)  NOT NULL,
    [Floor_FloorID] int  NOT NULL
);
GO

-- Creating table 'Thing'
CREATE TABLE [dbo].[Thing] (
    [ThingID] int IDENTITY(1,1) NOT NULL,
    [Num_Uscite] nvarchar(max)  NOT NULL,
    [Prezzo] float  NOT NULL,
    [Customer_CustomerID] int  NULL,
    [Building_BuildingID] int  NOT NULL
);
GO

-- Creating table 'ItemType'
CREATE TABLE [dbo].[ItemType] (
    [ItemTypeID] int IDENTITY(1,1) NOT NULL,
    [Categoria] nvarchar(max)  NOT NULL,
    [Marca] nvarchar(max)  NOT NULL,
    [Modello] nvarchar(max)  NOT NULL,
    [Descrizione] nvarchar(max)  NOT NULL,
    [Customer_CustomerID] int  NULL
);
GO

-- Creating table 'Item'
CREATE TABLE [dbo].[Item] (
    [ItemID] int IDENTITY(1,1) NOT NULL,
    [ConsumoEnergetico] nvarchar(max)  NOT NULL,
    [Seriale] nvarchar(max)  NOT NULL,
    [Room_RoomId] int  NOT NULL,
    [ItemType_ItemTypeID] int  NULL,
    [Thing_ThingID] int  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [CustomerID] in table 'Customer'
ALTER TABLE [dbo].[Customer]
ADD CONSTRAINT [PK_Customer]
    PRIMARY KEY CLUSTERED ([CustomerID] ASC);
GO

-- Creating primary key on [BuildingID] in table 'Building'
ALTER TABLE [dbo].[Building]
ADD CONSTRAINT [PK_Building]
    PRIMARY KEY CLUSTERED ([BuildingID] ASC);
GO

-- Creating primary key on [FloorID] in table 'Floor'
ALTER TABLE [dbo].[Floor]
ADD CONSTRAINT [PK_Floor]
    PRIMARY KEY CLUSTERED ([FloorID] ASC);
GO

-- Creating primary key on [RoomId] in table 'Room'
ALTER TABLE [dbo].[Room]
ADD CONSTRAINT [PK_Room]
    PRIMARY KEY CLUSTERED ([RoomId] ASC);
GO

-- Creating primary key on [ThingID] in table 'Thing'
ALTER TABLE [dbo].[Thing]
ADD CONSTRAINT [PK_Thing]
    PRIMARY KEY CLUSTERED ([ThingID] ASC);
GO

-- Creating primary key on [ItemTypeID] in table 'ItemType'
ALTER TABLE [dbo].[ItemType]
ADD CONSTRAINT [PK_ItemType]
    PRIMARY KEY CLUSTERED ([ItemTypeID] ASC);
GO

-- Creating primary key on [ItemID] in table 'Item'
ALTER TABLE [dbo].[Item]
ADD CONSTRAINT [PK_Item]
    PRIMARY KEY CLUSTERED ([ItemID] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [Customer_CustomerID] in table 'Building'
ALTER TABLE [dbo].[Building]
ADD CONSTRAINT [FK_CustomerBuilding]
    FOREIGN KEY ([Customer_CustomerID])
    REFERENCES [dbo].[Customer]
        ([CustomerID])
    ON DELETE SET NULL ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CustomerBuilding'
CREATE INDEX [IX_FK_CustomerBuilding]
ON [dbo].[Building]
    ([Customer_CustomerID]);
GO

-- Creating foreign key on [Building_BuildingID] in table 'Floor'
ALTER TABLE [dbo].[Floor]
ADD CONSTRAINT [FK_BuildingFloor]
    FOREIGN KEY ([Building_BuildingID])
    REFERENCES [dbo].[Building]
        ([BuildingID])
    ON DELETE CASCADE ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_BuildingFloor'
CREATE INDEX [IX_FK_BuildingFloor]
ON [dbo].[Floor]
    ([Building_BuildingID]);
GO

-- Creating foreign key on [Floor_FloorID] in table 'Room'
ALTER TABLE [dbo].[Room]
ADD CONSTRAINT [FK_FloorRoom]
    FOREIGN KEY ([Floor_FloorID])
    REFERENCES [dbo].[Floor]
        ([FloorID])
    ON DELETE CASCADE ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_FloorRoom'
CREATE INDEX [IX_FK_FloorRoom]
ON [dbo].[Room]
    ([Floor_FloorID]);
GO

-- Creating foreign key on [Customer_CustomerID] in table 'Thing'
ALTER TABLE [dbo].[Thing]
ADD CONSTRAINT [FK_CustomerThing]
    FOREIGN KEY ([Customer_CustomerID])
    REFERENCES [dbo].[Customer]
        ([CustomerID])
    ON DELETE SET NULL ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CustomerThing'
CREATE INDEX [IX_FK_CustomerThing]
ON [dbo].[Thing]
    ([Customer_CustomerID]);
GO

-- Creating foreign key on [Building_BuildingID] in table 'Thing'
ALTER TABLE [dbo].[Thing]
ADD CONSTRAINT [FK_BuildingThing]
    FOREIGN KEY ([Building_BuildingID])
    REFERENCES [dbo].[Building]
        ([BuildingID])
    ON DELETE CASCADE ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_BuildingThing'
CREATE INDEX [IX_FK_BuildingThing]
ON [dbo].[Thing]
    ([Building_BuildingID]);
GO

-- Creating foreign key on [Room_RoomId] in table 'Item'
ALTER TABLE [dbo].[Item]
ADD CONSTRAINT [FK_RoomItem]
    FOREIGN KEY ([Room_RoomId])
    REFERENCES [dbo].[Room]
        ([RoomId])
    ON DELETE CASCADE ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_RoomItem'
CREATE INDEX [IX_FK_RoomItem]
ON [dbo].[Item]
    ([Room_RoomId]);
GO

-- Creating foreign key on [ItemType_ItemTypeID] in table 'Item'
ALTER TABLE [dbo].[Item]
ADD CONSTRAINT [FK_ItemTypeItem]
    FOREIGN KEY ([ItemType_ItemTypeID])
    REFERENCES [dbo].[ItemType]
        ([ItemTypeID])
    ON DELETE CASCADE ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ItemTypeItem'
CREATE INDEX [IX_FK_ItemTypeItem]
ON [dbo].[Item]
    ([ItemType_ItemTypeID]);
GO

-- Creating foreign key on [Thing_ThingID] in table 'Item'
ALTER TABLE [dbo].[Item]
ADD CONSTRAINT [FK_ThingItem]
    FOREIGN KEY ([Thing_ThingID])
    REFERENCES [dbo].[Thing]
        ([ThingID])
    ON DELETE SET NULL ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ThingItem'
CREATE INDEX [IX_FK_ThingItem]
ON [dbo].[Item]
    ([Thing_ThingID]);
GO

-- Creating foreign key on [Customer_CustomerID] in table 'ItemType'
ALTER TABLE [dbo].[ItemType]
ADD CONSTRAINT [FK_CustomerItemType]
    FOREIGN KEY ([Customer_CustomerID])
    REFERENCES [dbo].[Customer]
        ([CustomerID])
    ON DELETE SET NULL ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CustomerItemType'
CREATE INDEX [IX_FK_CustomerItemType]
ON [dbo].[ItemType]
    ([Customer_CustomerID]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------