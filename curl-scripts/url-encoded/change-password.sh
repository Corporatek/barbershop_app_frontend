# ID=2 sh curl-scripts/url-encoded/change-password.sh

curl "http://localhost:4741/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode ''

echo