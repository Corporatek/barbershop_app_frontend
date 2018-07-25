# sh curl-scripts/url-encoded/sign-in.sh

curl "http://localhost:4741/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode ''

echo