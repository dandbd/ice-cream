@echo off
cd D:\Source\Personal\Apps\ice-cream
del D:\Source\Personal\Apps\ice-cream\ice-cream.data\data\*.* /F /Q /S
cd  D:\Source\Personal\Apps\ice-cream\ice-cream.data\data\
rmdir . /S /Q
del D:\Source\Personal\Apps\ice-cream\ice-cream.data\log\*.* /F /Q /S
cd D:\Source\Personal\Apps\ice-cream
