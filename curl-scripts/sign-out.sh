# ID=2 sh curl-scripts/sign-out.sh

curl "http://localhost:4741/sign-out" \
  --include \
  --request DELETE \

echo