for d in */; do
mongoimport -d CapitolHill_Db -c Districts --file $d/shape.geojson
done
